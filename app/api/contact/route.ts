import { NextRequest, NextResponse } from "next/server";
import { contact } from "@/constants";
import {
  isValidEmail,
  normalizeWhitespace,
  sanitizeText,
  toSafeString,
} from "@/lib/utils";

export const runtime = "nodejs";

interface QuoteRequestBody {
  name: unknown;
  email: unknown;
  company: unknown;
  budget: unknown;
  details: unknown;
}

const detailsMinLength = 20;
const detailsMaxLength = 2000;

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(req: NextRequest) {
  let body: QuoteRequestBody;

  try {
    body = (await req.json()) as QuoteRequestBody;
  } catch {
    return jsonError(contact.form.fieldErrors.required, 400);
  }

  const name = toSafeString(body.name);
  const email = toSafeString(body.email);
  const company = toSafeString(body.company);
  const budget = toSafeString(body.budget);
  const details = toSafeString(body.details);

  if (!name || name.length < 2) {
    return jsonError(contact.form.fieldErrors.required, 400);
  }

  if (!email || !isValidEmail(email)) {
    return jsonError(contact.form.fieldErrors.invalidEmail, 400);
  }

  const allowedBudgetValues = new Set<string>(
    contact.form.budgetOptions.map((o) => o.value),
  );

  if (!budget || !allowedBudgetValues.has(budget)) {
    return jsonError(contact.form.fieldErrors.required, 400);
  }

  if (!details) {
    return jsonError(contact.form.fieldErrors.required, 400);
  }

  const detailsTrimmed = details;

  if (detailsTrimmed.length < detailsMinLength) {
    return jsonError(contact.form.fieldErrors.detailsTooShort, 400);
  }

  if (detailsTrimmed.length > detailsMaxLength) {
    return jsonError(contact.form.fieldErrors.detailsTooLong, 400);
  }

  const sanitizedPayload = {
    name: sanitizeText(name, 80),
    email: normalizeWhitespace(email).toLowerCase(),
    company: company ? sanitizeText(company, 120) : "",
    budget,
    details: sanitizeText(detailsTrimmed, detailsMaxLength),
  };

  const webhookUrl = process.env.CONTACT_QUOTE_WEBHOOK_URL;

  if (!webhookUrl) {
    return jsonError(contact.form.fallbackApiMessage, 503);
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitizedPayload),
    });

    if (!res.ok) {
      return jsonError(contact.form.fallbackApiMessage, 503);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return jsonError(contact.form.fallbackApiMessage, 503);
  }
}

