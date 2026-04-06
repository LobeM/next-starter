import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

import { env } from "./env/server";

config({ path: ".env" });

export default defineConfig({
  schema: "./db/schema/index.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
