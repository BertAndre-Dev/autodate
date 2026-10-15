"use client";

import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { contact, contactPage } from "@/constants";
import { isValidEmail, normalizeWhitespace, sanitizeText } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  details: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const detailsMinLength = 20;
const detailsMaxLength = 2000;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M12 21s6.5-5.4 6.5-10.2a6.5 6.5 0 1 0-13 0C5.5 15.6 12 21 12 21z"
        fill="none"
        stroke="#C4161C"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10.6" r="2" fill="none" stroke="#C4161C" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M8.2 4.8h2.1l1.2 3-1.5 1a12 12 0 0 0 5.2 5.2l1-1.5 3 1.2v2.1c0 .7-.5 1.3-1.2 1.4A14.2 14.2 0 0 1 6.8 6c.1-.7.7-1.2 1.4-1.2z"
        fill="none"
        stroke="#C4161C"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        fill="none"
        stroke="#C4161C"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 7.5 12 13l7.5-5.5"
        fill="none"
        stroke="#C4161C"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoCard({
  icon,
  title,
  children,
  className = "",
}: Readonly<{
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}>) {
  return (
    <article
      className={`flex gap-4 rounded-2xl bg-[#FBF6F6] px-5 py-5 sm:px-6 ${className}`}
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <h2 className="text-base font-semibold text-[#1A1A1A]">{title}</h2>
        <div className="mt-1 text-sm leading-6 text-[#4A4A4A]">{children}</div>
      </div>
    </article>
  );
}

export default function ContactPageSections({
  initialEmail,
}: Readonly<{ initialEmail?: string }>) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    details: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!initialEmail || !isValidEmail(initialEmail)) return;
    setValues((current) => ({
      ...current,
      email: initialEmail.trim().toLowerCase(),
    }));
  }, [initialEmail]);

  const setField = (key: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
    setIsSuccess(false);
  };

  const validate = (nextValues: FormValues): FieldErrors => {
    const errors: FieldErrors = {};
    const name = nextValues.name.trim();
    const email = nextValues.email.trim();
    const details = nextValues.details.trim();

    if (name.length < 2) errors.name = contact.form.fieldErrors.required;
    if (!email) errors.email = contact.form.fieldErrors.required;
    if (email && !isValidEmail(email)) {
      errors.email = contact.form.fieldErrors.invalidEmail;
    }
    if (!details) errors.details = contact.form.fieldErrors.required;
    if (details && details.length < detailsMinLength) {
      errors.details = contact.form.fieldErrors.detailsTooShort;
    }
    if (details.length > detailsMaxLength) {
      errors.details = contact.form.fieldErrors.detailsTooLong;
    }
    return errors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setIsSuccess(false);

    const nextErrors = validate(values);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizeText(values.name, 80),
          email: normalizeWhitespace(values.email).toLowerCase(),
          details: sanitizeText(values.details, detailsMaxLength),
        }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) {
        setFormError(data.message ?? contact.form.fallbackApiMessage);
        return;
      }
      setIsSuccess(true);
      setValues({ name: "", email: "", details: "" });
    } catch {
      setFormError(contact.form.fallbackApiMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-[#E6E6E6] bg-white px-4 text-sm text-[#1A1A1A] outline-none placeholder:text-[#A3A3A3] focus-visible:border-[#C4161C] focus-visible:ring-2 focus-visible:ring-[#C4161C]/25";

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-5 px-4 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-8 lg:px-10 xl:px-0">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<PinIcon />}
            title={contactPage.visit.title}
            className="sm:col-span-2"
          >
            <p>{contactPage.visit.body}</p>
          </InfoCard>

          <InfoCard icon={<PhoneIcon />} title={contactPage.call.title}>
            <a
              href={contactPage.call.phoneHref}
              className="block transition-colors hover:text-[#C4161C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4161C]/30"
            >
              {contactPage.call.phone}
            </a>
            <p>{contactPage.call.hours}</p>
          </InfoCard>

          <InfoCard icon={<MailIcon />} title={contactPage.email.title}>
            <a
              href={contactPage.email.href}
              className="break-all transition-colors hover:text-[#C4161C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4161C]/30"
            >
              {contactPage.email.address}
            </a>
          </InfoCard>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl bg-[#111111] px-6 py-7 text-white sm:px-7 sm:py-8"
        >
          <h1 className="text-xl font-semibold tracking-tight">
            {contact.form.title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/75">
            {contact.form.description}
          </p>

          {formError ? (
            <p className="mt-4 text-sm text-[#FFB4B4]" role="alert">
              {formError}
            </p>
          ) : null}
          {isSuccess ? (
            <p className="mt-4 text-sm text-white" role="status">
              {contact.form.successMessage}
            </p>
          ) : null}

          <div className="mt-6 space-y-4">
            <div>
              <label className="sr-only" htmlFor="contact-name">
                {contact.form.fields.nameLabel}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setField("name", event.target.value)}
                placeholder={contact.form.placeholders.name}
                aria-invalid={fieldErrors.name ? true : undefined}
                className={`${fieldClass} h-12`}
              />
              {fieldErrors.name ? (
                <p className="mt-1 text-xs text-[#FFB4B4]">{fieldErrors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-email">
                {contact.form.fields.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setField("email", event.target.value)}
                placeholder={contact.form.placeholders.email}
                aria-invalid={fieldErrors.email ? true : undefined}
                className={`${fieldClass} h-12`}
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-[#FFB4B4]">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-message">
                {contact.form.fields.detailsLabel}
              </label>
              <textarea
                id="contact-message"
                name="details"
                value={values.details}
                onChange={(event) => setField("details", event.target.value)}
                placeholder={contact.form.placeholders.details}
                aria-invalid={fieldErrors.details ? true : undefined}
                rows={7}
                className={`${fieldClass} min-h-44 resize-y py-3`}
              />
              {fieldErrors.details ? (
                <p className="mt-1 text-xs text-[#FFB4B4]">{fieldErrors.details}</p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-[#C4161C] text-sm font-semibold text-white transition-transform duration-100 ease-out hover:bg-[#A51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? contact.form.submittingLabel : contact.form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
