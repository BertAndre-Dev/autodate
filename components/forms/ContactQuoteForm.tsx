"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import MotionSubmitButton from "@/components/motion/MotionSubmitButton";
import { contact } from "@/constants";
import { isValidEmail, normalizeWhitespace, sanitizeText } from "@/lib/utils";

interface QuoteFormValues {
  name: string;
  email: string;
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
    details: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (nextValues: QuoteFormValues): FieldErrors => {
    const errors: FieldErrors = {};

    const name = nextValues.name.trim();
    const email = nextValues.email.trim();
    const details = nextValues.details.trim();

    if (!name) errors.name = contact.form.fieldErrors.required;
    if (!email) errors.email = contact.form.fieldErrors.required;
    if (email && !isValidEmail(email)) {
      errors.email = contact.form.fieldErrors.invalidEmail;
    }

    if (!details) errors.details = contact.form.fieldErrors.required;
    if (details) {
      if (details.length < detailsMinLength) {
        errors.details = contact.form.fieldErrors.detailsTooShort;
      }
      if (details.length > detailsMaxLength) {
        errors.details = contact.form.fieldErrors.detailsTooLong;
      }
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
            ? (data.message ?? contact.form.fallbackApiMessage)
            : contact.form.fallbackApiMessage,
        );
        return;
      }

      setIsSuccess(true);
      setValues({ name: "", email: "", details: "" });
      setFieldErrors({});
    } catch {
      setFormError(contact.form.fallbackApiMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-foreground">
          {contact.form.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
          {contact.form.description}
        </p>
      </div>

      {/* API Error */}
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

      {/* Success */}
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

      {/* Name */}
      <div className="space-y-1">
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => {
            const next = e.target.value;
            setValues((v) => ({ ...v, name: next }));
            if (fieldErrors.name)
              setFieldErrors((fe) => ({ ...fe, name: undefined }));
          }}
          placeholder={contact.form.placeholders.name}
          className="h-12 w-full rounded-xl border border-[#4c4c4c] bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          autoComplete="name"
        />
        {fieldErrors.name ? (
          <p className="text-xs text-[#4c4c4c] pl-1">{fieldErrors.name}</p>
        ) : null}
      </div>

      {/* Email */}
      <div className="space-y-1">
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
          className="h-12 w-full rounded-xl border border-[#4c4c4c] bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          autoComplete="email"
        />
        {fieldErrors.email ? (
          <p className="text-xs text-[#4c4c4c] pl-1">{fieldErrors.email}</p>
        ) : null}
      </div>

      {/* Message / Details */}
      <div className="space-y-1">
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
          rows={8}
          className="w-full resize-none rounded-xl border border-[#4c4c4c] bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
        />
        {fieldErrors.details ? (
          <p className="text-xs text-[#4c4c4c] pl-1">{fieldErrors.details}</p>
        ) : null}
      </div>

      {/* Submit */}
      <MotionSubmitButton
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#B71C1C] hover:bg-[#9B1818] text-white font-semibold text-sm h-14 cursor-pointer transition-colors"
      >
        {isSubmitting
          ? contact.form.submittingLabel
          : contact.form.submitLabel}
      </MotionSubmitButton>
    </form>
  );
}