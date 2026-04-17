import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    BASE_URL: z.url(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number(),
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NODEMAILER_USER: z.string(),
    NODEMAILER_APP_PASSWORD: z.string(),
    ADMIN_EMAILS: z
      .string()
      .transform((raw) =>
        raw
          .split(";")
          .map((part) => part.trim())
          .filter((part) => part.length > 0)
      )
      .pipe(z.array(z.email()).min(1)),
    DB_MIGRATING: z
      .string()
      .refine((s) => s === "true" || s === "false")
      .transform((s) => s === "true")
      .optional(),
  },
  onValidationError: (issues) => {
    console.error("❌ Invalid environment variables:", issues.map((i) => i.path).flat());
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  /* eslint-disable n/no-process-env */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_APP_PASSWORD: process.env.NODEMAILER_APP_PASSWORD,
    ADMIN_EMAILS: process.env.ADMIN_EMAILS,
    DB_MIGRATING: process.env.DB_MIGRATING,
  },
  /* eslint-enable n/no-process-env */
});
