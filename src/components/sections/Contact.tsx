"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Send } from "lucide-react";
import { personal } from "@/data/portfolio";
import { buttonStyles } from "@/lib/styles";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SocialLinks from "@/components/ui/SocialLinks";

/* EmailJS credentials come from .env.local (see .env.example) */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns a message for each invalid field (empty object = valid). */
function validate({ name, email, message }: Fields): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

const inputBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-heading placeholder:text-body/60 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it
    if (errors[name as keyof Fields]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hidden honeypot field: real people leave it empty, bots fill it
    const form = e.currentTarget;
    if ((form.elements.namedItem("company") as HTMLInputElement | null)?.value) return;

    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for keyboard/screen-reader users
      const first = Object.keys(found)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setFeedback(`The contact form isn't configured yet. Please email me directly at ${personal.email}.`);
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          title: "New message from your portfolio",
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      setFeedback("Thank you! Your message has been sent. I'll get back to you soon.");
      setFields({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback(`Sorry, something went wrong. Please try again or email me at ${personal.email}.`);
    }
  };

  const fieldClass = (key: keyof Fields) =>
    `${inputBase} ${errors[key] ? "border-red-400" : "border-border"}`;

  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Have an opportunity, a project idea, or just want to say hello? My inbox is always open, and I'd love to hear from you."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact details */}
        <Reveal className="space-y-6">
          <div className="rounded-2xl border border-border bg-alt p-7">
            <h3 className="text-xl">Get in touch</h3>
            <p className="mt-2 text-sm">
              I usually reply within a day or two. Always happy to connect, collaborate, or chat about tech.
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-3 text-heading transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary shadow-soft">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span className="break-all">{personal.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-heading">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary shadow-soft">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                {personal.location}
              </li>
            </ul>

            <SocialLinks className="mt-7" />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-heading">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass("name")}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-heading">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass("email")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-heading">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a little about your project or opportunity..."
                value={fields.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClass("message")} resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honeypot: hidden from people and assistive tech */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" disabled={status === "sending"} className={buttonStyles.primary}>
                {status === "sending" ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {/* Live region announces success/error to screen readers */}
            <div aria-live="polite" role="status">
              {feedback && (status === "success" || status === "error") && (
                <p
                  className={`mt-5 flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status === "success" ? (
                    <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  ) : (
                    <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  )}
                  {feedback}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
