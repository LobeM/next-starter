"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { APIError } from "better-auth/api";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { user } from "@/db/schema/auth";
import { ErrorCode, auth } from "@/lib/auth";

export async function signInEmailAction(email: string, password: string) {
  if (!email) return { error: "Please enter your email" };
  if (!password) return { error: "Please enter your password" };

  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
    });
    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.code as ErrorCode) : "UNKNOWN";
      console.dir(err, { depth: 5 });
      switch (errCode) {
        case "EMAIL_NOT_VERIFIED":
          redirect("/verify?error=email_not_verified");
        default:
          return { error: err.message };
      }
    }

    return { error: "Internal Server Error" };
  }
}

export async function signUpEmailAction(name: string, email: string, password: string) {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      const errCode = err.body ? (err.body.error.code as ErrorCode) : "UNKNOWN";
      switch (errCode) {
        case "USER_ALREADY_EXISTS":
          return { error: "Failed to create user. Please try again." };
        default:
          return { error: err.message };
      }
    }

    return { error: "Internal Server Error" };
  }
}

export async function changePasswordAction(currentPassword: string, newPassword: string) {
  if (!currentPassword) return { error: "Please enter your current password" };
  if (!newPassword) return { error: "Please enter your new password" };

  try {
    await auth.api.changePassword({
      headers: await headers(),
      body: {
        currentPassword,
        newPassword,
      },
    });

    return { error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { error: err.message };
    }

    return { error: "Internal Server Error" };
  }
}

export async function deleteUserAction({ userId }: { userId: string }) {
  const headersList = await headers();

  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) throw new Error("Unauthorized");

  if (session.user.role !== "ADMIN" || session.user.id === userId) {
    throw new Error("Forbidden");
  }

  try {
    await db.delete(user).where(eq(user.id, userId));

    if (session.user.id === userId) {
      await auth.api.signOut({ headers: headersList });
      redirect("/sign-in");
    }

    revalidatePath("/dashboard/admin");
    return { success: true, error: null };
  } catch (err) {
    if (err instanceof APIError) {
      return { success: false, error: err.message };
    }
    return { success: false, error: "Internal Server Error" };
  }
}
