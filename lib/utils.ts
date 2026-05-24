import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeName(name: string) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-Z\s'-]/g, "")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getInitials(username: string) {
  const nameParts = normalizeName(username).split(" ").filter(Boolean);

  if (nameParts.length === 0) {
    return "";
  }

  const firstInitial = nameParts[0].charAt(0);
  const lastInitial = nameParts.at(-1)?.charAt(0) ?? "";

  return `${firstInitial}${lastInitial}`.toUpperCase();
}
