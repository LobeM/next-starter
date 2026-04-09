"server-only";

import { env } from "@/env/server";

export const VALID_DOMAINS = () => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com"];

  if (env.NODE_ENV === "development") {
    domains.push("example.com");
  }

  return domains;
};
