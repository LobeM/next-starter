"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { signIn } from "@/lib/auth-client";

import SignInOauthButton from "../sign-in-oauth-button";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const result = await signIn.email({
      email: values.email,
      password: values.password,
    });

    if (result.error) {
      setIsLoading(false);

      if (result.error.code === "EMAIL_NOT_VERIFIED") {
        router.push("/verify?error=email_not_verified");
        return;
      }

      toast.error(result.error.message);
      return;
    }

    toast.success("Login successful");
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <fieldset disabled={isLoading} className="contents">
        <FieldGroup>
          <FormGenerator
            type="email"
            inputType="input"
            name="email"
            label="Email"
            placeholder="m@example.com"
            control={form.control as Control<any>}
          />
          <FormGenerator
            type="password"
            inputType="input"
            name="password"
            label="Password"
            autoComplete="current-password"
            control={form.control as Control<any>}
            labelRightContent={
              <Link
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            }
          />
          <Field>
            <Button type="submit">Login</Button>
          </Field>
          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
            Or continue with
          </FieldSeparator>
          <Field>
            <SignInOauthButton provider="apple" />
            <SignInOauthButton provider="google" />
            <SignInOauthButton provider="github" />
            <FieldDescription className="text-center">
              Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  );
}
