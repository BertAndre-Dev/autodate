import { NextRequest, NextResponse } from "next/server";
import { contact } from "@/constants";
import { sendContactEmail } from "@/lib/send-contact-email";
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
  const details = toSafeString(body.details);

  if (!name || name.length < 2) {
    return jsonError(contact.form.fieldErrors.required, 400);
  }

  if (!email || !isValidEmail(email)) {
    return jsonError(contact.form.fieldErrors.invalidEmail, 400);
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
    details: sanitizeText(detailsTrimmed, detailsMaxLength),
  };

  if (!process.env.SENDGRID_API_KEY) {
    return jsonError(contact.form.fallbackApiMessage, 503);
  }

  try {
    await sendContactEmail(sanitizedPayload);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact email failed:", error);
    return jsonError(contact.form.fallbackApiMessage, 503);
  }
}
