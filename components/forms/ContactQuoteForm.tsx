"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import MotionSubmitButton from "@/components/motion/MotionSubmitButton";
import { contact } from "@/constants";
import {
  isValidEmail,
  normalizeWhitespace,
  sanitizeText,
} from "@/lib/utils";

interface QuoteFormValues {
  name: string;
  email: string;
  company: string;
  budget: string;
  details: string;
}

interface QuoteApiResponseOk {
  ok: true;
}

interface QuoteApiResponseError {
  ok: false;
  message: string;
}

type QuoteApiResponse = QuoteApiResponseOk | QuoteApiResponseError;

type FieldKey = keyof QuoteFormValues;
type FieldErrors = Partial<Record<FieldKey, string>>;

const detailsMinLength = 20;
const detailsMaxLength = 2000;

export default function ContactQuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>({
    name: "",
    email: "",
    company: "",
    budget: "",
    details: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const allowedBudgetValues = useMemo(
    () =>
      new Set<string>(contact.form.budgetOptions.map((o) => o.value)),
    [],
  );

  const validate = (nextValues: QuoteFormValues): FieldErrors => {
    const errors: FieldErrors = {};

    const name = nextValues.name.trim();
    const email = nextValues.email.trim();
    const details = nextValues.details.trim();
    const budget = nextValues.budget.trim();

    if (!name) errors.name = contact.form.fieldErrors.required;
    if (!email) errors.email = contact.form.fieldErrors.required;
    if (email && !isValidEmail(email))
      errors.email = contact.form.fieldErrors.invalidEmail;

    if (!budget) errors.budget = contact.form.fieldErrors.required;
    if (budget && !allowedBudgetValues.has(budget))
      errors.budget = contact.form.fieldErrors.required;

    if (!details) errors.details = contact.form.fieldErrors.required;
    if (details) {
      if (details.length < detailsMinLength)
        errors.details = contact.form.fieldErrors.detailsTooShort;
      if (details.length > detailsMaxLength)
        errors.details = contact.form.fieldErrors.detailsTooLong;
    }

    return errors;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(false);
    setFormError(null);

    const nextValues: QuoteFormValues = { ...values };

    const nextErrors = validate(nextValues);
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: sanitizeText(nextValues.name, 80),
        email: normalizeWhitespace(nextValues.email).toLowerCase(),
        company: sanitizeText(nextValues.company, 120),
        budget: nextValues.budget,
        details: sanitizeText(nextValues.details, detailsMaxLength),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as QuoteApiResponse;

      if (!res.ok || data.ok === false) {
        setFormError(
          data.ok === false
            ? data.message ?? contact.form.fallbackApiMessage
            : contact.form.fallbackApiMessage,
        );
        return;
      }

      setIsSuccess(true);
      setValues({
        name: "",
        email: "",
        company: "",
        budget: "",
        details: "",
      });
      setFieldErrors({});
    } catch {
      setFormError(contact.form.fallbackApiMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          {contact.form.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          {contact.form.description}
        </p>
      </div>

      {formError ? (
        <div
          className="rounded-xl border border-foreground/10 bg-foreground/5 p-4"
          role="alert"
        >
          <p className="text-sm font-medium text-foreground">
            {contact.form.apiErrorTitle}
          </p>
          <p className="mt-1 text-sm text-foreground/70">{formError}</p>
        </div>
      ) : null}

      {isSuccess ? (
        <div
          className="rounded-xl border border-foreground/10 bg-foreground/5 p-4"
          role="status"
        >
          <p className="text-sm font-medium text-foreground">
            {contact.form.successTitle}
          </p>
          <p className="mt-1 text-sm text-foreground/70">
            {contact.form.successMessage}
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            {contact.form.fields.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => {
              const next = e.target.value;
              setValues((v) => ({ ...v, name: next }));
              if (fieldErrors.name) setFieldErrors((fe) => ({ ...fe, name: undefined }));
            }}
            placeholder={contact.form.placeholders.name}
            className="h-11 w-full rounded-xl border border-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            autoComplete="name"
          />
          {fieldErrors.name ? (
            <p className="text-xs text-foreground/80">{fieldErrors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            {contact.form.fields.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => {
              const next = e.target.value;
              setValues((v) => ({ ...v, email: next }));
              if (fieldErrors.email)
                setFieldErrors((fe) => ({ ...fe, email: undefined }));
            }}
            placeholder={contact.form.placeholders.email}
            className="h-11 w-full rounded-xl border border-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            autoComplete="email"
          />
          {fieldErrors.email ? (
            <p className="text-xs text-foreground/80">{fieldErrors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-medium text-foreground"
        >
          {contact.form.fields.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={values.company}
          onChange={(e) => {
            const next = e.target.value;
            setValues((v) => ({ ...v, company: next }));
            if (fieldErrors.company)
              setFieldErrors((fe) => ({ ...fe, company: undefined }));
          }}
          placeholder={contact.form.placeholders.company}
          className="h-11 w-full rounded-xl border border-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
          autoComplete="organization"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="budget"
          className="text-sm font-medium text-foreground"
        >
          {contact.form.fields.budgetLabel}
        </label>
        <select
          id="budget"
          name="budget"
          value={values.budget}
          onChange={(e) => {
            const next = e.target.value;
            setValues((v) => ({ ...v, budget: next }));
            if (fieldErrors.budget)
              setFieldErrors((fe) => ({ ...fe, budget: undefined }));
          }}
          className="h-11 w-full rounded-xl border border-foreground/10 bg-background px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          <option value="">{contact.form.placeholders.budget}</option>
          {contact.form.budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {fieldErrors.budget ? (
          <p className="text-xs text-foreground/80">{fieldErrors.budget}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="details"
          className="text-sm font-medium text-foreground"
        >
          {contact.form.fields.detailsLabel}
        </label>
        <textarea
          id="details"
          name="details"
          value={values.details}
          onChange={(e) => {
            const next = e.target.value;
            setValues((v) => ({ ...v, details: next }));
            if (fieldErrors.details)
              setFieldErrors((fe) => ({ ...fe, details: undefined }));
          }}
          placeholder={contact.form.placeholders.details}
          rows={6}
          className="w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        />
        {fieldErrors.details ? (
          <p className="text-xs text-foreground/80">{fieldErrors.details}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <MotionSubmitButton isSubmitting={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? contact.form.submittingLabel : contact.form.submitLabel}
        </MotionSubmitButton>
        <p className="text-xs text-foreground/60">
          {contact.form.privacyNote}
        </p>
      </div>
    </form>
  );
}

