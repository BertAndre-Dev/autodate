import sgMail from "@sendgrid/mail";

export type ContactEmailPayload = {
  name: string;
  email: string;
  details: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL ?? "inquiry@autodatefleet.com";
  const toEmail =
    process.env.CONTACT_TO_EMAIL ?? "inquiry@autodatefleet.com";

  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY is not configured");
  }

  sgMail.setApiKey(apiKey);

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeDetails = escapeHtml(payload.details).replaceAll("\n", "<br />");

  await sgMail.send({
    to: toEmail,
    from: {
      email: fromEmail,
      name: "Autodate SmartFleet",
    },
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    subject: `New inquiry from ${payload.name}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      "Message:",
      payload.details,
    ].join("\n"),
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; color: #111;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${safeDetails}</p>
      </div>
    `,
  });
}
