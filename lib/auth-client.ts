import {
  adminClient,
  customSessionClient,
  inferAdditionalFields,
  magicLinkClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { env } from "@/env/client";
import type { auth } from "@/lib/auth";
import { ac, roles } from "@/lib/permissions";

const authBaseURL = new URL("auth", `${env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")}/`).toString();

const authClient = createAuthClient({
  baseURL: authBaseURL,
  plugins: [
    inferAdditionalFields<typeof auth>(),
    adminClient({ ac, roles }),
    customSessionClient<typeof auth>(),
    magicLinkClient(),
  ],
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  admin,
  sendVerificationEmail,
  requestPasswordReset,
  resetPassword,
  updateUser,
} = authClient;
