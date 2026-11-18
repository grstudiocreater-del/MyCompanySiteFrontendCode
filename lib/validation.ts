export type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  subject: 150,
  message: 5000,
  messageMin: 10,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trims and coerces unknown input into a ContactInput shape. */
export function normalizeContact(input: unknown): ContactInput {
  const source = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const read = (key: ContactField) => (typeof source[key] === "string" ? (source[key] as string).trim() : "");
  return { name: read("name"), email: read("email"), subject: read("subject"), message: read("message") };
}

/** Shared by the contact form (client) and the contact API route (server). */
export function validateContact(data: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (!data.name) errors.name = "Please tell us your name.";
  else if (data.name.length > CONTACT_LIMITS.name) errors.name = `Please keep your name under ${CONTACT_LIMITS.name} characters.`;

  if (!data.email) errors.email = "We need an email address to reply to.";
  else if (data.email.length > CONTACT_LIMITS.email || !EMAIL_PATTERN.test(data.email))
    errors.email = "That email address doesn't look quite right.";

  if (!data.subject) errors.subject = "Add a short subject line.";
  else if (data.subject.length > CONTACT_LIMITS.subject)
    errors.subject = `Please keep the subject under ${CONTACT_LIMITS.subject} characters.`;

  if (!data.message) errors.message = "Write a few words about what you need.";
  else if (data.message.length < CONTACT_LIMITS.messageMin) errors.message = "Could you add a little more detail?";
  else if (data.message.length > CONTACT_LIMITS.message)
    errors.message = `Please keep your message under ${CONTACT_LIMITS.message} characters.`;

  return errors;
}
