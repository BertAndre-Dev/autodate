export type ClassNameValue = string | undefined | null | false;

/**
 * Simple className combiner.
 * Keeps this project dependency-free while still supporting conditional classes.
 */
export function cn(...inputs: ClassNameValue[]): string {
  return inputs.filter((v): v is string => Boolean(v)).join(" ");
}

export function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

export function isValidEmail(email: string): boolean {
  // Intentionally pragmatic (not full RFC) to keep validation predictable.
  const normalized = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}

export function sanitizeText(input: string, maxLength: number): string {
  const normalized = normalizeWhitespace(input);
  return normalized.length > maxLength ? normalized.slice(0, maxLength) : normalized;
}

export function toSafeString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = normalizeWhitespace(value);
  return trimmed.length ? trimmed : null;
}

