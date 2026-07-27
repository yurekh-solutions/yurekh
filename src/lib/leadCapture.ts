/**
 * Silent server-side lead capture — fire-and-forget.
 *
 * Sends the lead to FormSubmit (free, keyless) so it lands in the
 * yurekhsolutions@gmail.com inbox even if the visitor never presses
 * Send on WhatsApp. Runs in the background and never blocks or breaks
 * the booking / contact flow.
 *
 * Note: FormSubmit sends a one-time activation email on the very first
 * submission — click "Activate" once and every lead after that is delivered.
 */
export const captureLead = (subject: string, data: Record<string, string>) => {
  try {
    fetch("https://formsubmit.co/ajax/yurekhsolutions@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        _captcha: "false",
        ...data,
      }),
      keepalive: true,
    }).catch(() => {
      /* lead capture must never surface an error to the visitor */
    });
  } catch {
    /* ignore — UI flow always continues */
  }
};
