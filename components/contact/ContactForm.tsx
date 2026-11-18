"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import {
  CONTACT_LIMITS,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const fields: Array<{
  name: ContactField;
  label: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  placeholder: string;
}> = [
  { name: "name", label: "Name", autoComplete: "name", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@example.com" },
  { name: "subject", label: "Subject", placeholder: "What's this about?" },
  { name: "message", label: "Message", multiline: true, placeholder: "Tell us a little about your idea or question…" },
];

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#161620] px-4 py-3.5 text-[16px] text-white placeholder:text-zinc-500 transition-[border-color,box-shadow,background-color] duration-200 focus:border-blue-500 focus:bg-[#1a1a26] focus:outline-none focus:ring-4 focus:ring-blue-500/20";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [message, setMessage] = useState("");

  function focusFirstError(fieldErrors: ContactErrors) {
    const first = fields.find((field) => fieldErrors[field.name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
  }

  function openEmailDraft(data: ReturnType<typeof normalizeContact>) {
    const subject = encodeURIComponent(`[Website] ${data.subject}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const formData = new FormData(event.currentTarget);
    const data = normalizeContact(Object.fromEntries(formData));
    const fieldErrors = validateContact(data);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("idle");
      focusFirstError(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, company: formData.get("company") ?? "" }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok: boolean; message?: string; errors?: ContactErrors }
        | null;

      if (response.ok && result?.ok) {
        formRef.current?.reset();
        setStatus("success");
        return;
      }

      // A local email app is a useful fallback until a server delivery provider is configured.
      if (response.status === 503) {
        openEmailDraft(data);
        setMessage(`Your email app should open with a message addressed to ${brand.email}.`);
        setStatus("error");
        return;
      }

      if (result?.errors) {
        setErrors(result.errors);
        focusFirstError(result.errors);
      }
      setMessage(result?.message ?? `Something went wrong. Please try again or email ${brand.email}.`);
      setStatus("error");
    } catch {
      setMessage(`We couldn't reach the server. Check your connection and try again, or email ${brand.email}.`);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card role="status" radius="lg" className="flex min-h-[420px] flex-col items-start justify-center p-8 sm:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-white animate-settle">
          <Icon name="check" size={26} strokeWidth={2.4} />
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-ink">Message sent. Thank you!</h2>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          We&apos;ve received your message. Any reply will go to the email address you provided.
        </p>
        <Button variant="secondary" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </Card>
    );
  }

  const loading = status === "loading";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      aria-busy={loading}
      className="rounded-[32px] border border-line bg-paper p-6 sm:p-10"
    >
      <h2 id="contact-form-title" className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
        Send us a message
      </h2>
      <p className="mt-1.5 text-sm text-muted">All fields are required.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const error = errors[field.name];
          const id = `contact-${field.name}`;
          const errorId = `${id}-error`;
          const shared = {
            id,
            name: field.name,
            required: true,
            placeholder: field.placeholder,
            disabled: loading,
            maxLength: field.name === "message" ? CONTACT_LIMITS.message : CONTACT_LIMITS[field.name],
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
            className: cn(
              inputClass,
              error
                ? "border-red-700/60 focus:border-red-700 focus:ring-red-700/10"
                : "border-line focus:border-accent focus:ring-accent/12",
            ),
          };

          return (
            <div key={field.name} className={cn(field.multiline || field.name === "subject" ? "sm:col-span-2" : undefined)}>
              <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
                {field.label}
              </label>
              {field.multiline ? (
                <textarea {...shared} rows={6} className={cn(shared.className, "resize-y")} />
              ) : (
                <input {...shared} type={field.type ?? "text"} autoComplete={field.autoComplete} />
              )}
              {error && (
                <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm text-red-800">
                  <span aria-hidden className="grid size-4 place-items-center rounded-full bg-red-800 text-[10px] font-bold text-white">
                    !
                  </span>
                  {error}
                </p>
              )}
            </div>
          );
        })}

        {/* Honeypot — hidden from people and assistive tech */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div aria-live="polite" className="empty:hidden">
        {status === "error" && message && (
          <div role="alert" className="mt-6 flex gap-3 rounded-2xl border border-red-800/20 bg-red-50 p-4 text-sm leading-relaxed text-red-900">
            <span aria-hidden className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red-800 text-[11px] font-bold text-white">
              !
            </span>
            <p>{message}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={loading} arrow={!loading} className="sm:min-w-44">
          {loading ? (
            <>
              <span aria-hidden className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-sm text-muted">
          Prefer email?{" "}
          <a href={`mailto:${brand.email}`} className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent">
            {brand.email}
          </a>
        </p>
      </div>
    </form>
  );
}
