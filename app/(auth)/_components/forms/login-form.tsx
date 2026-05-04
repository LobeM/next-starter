"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldSeparator } from "@/components/ui/field";

import { signInEmailAction } from "../../actions";
import SignInOauthButton from "../sign-in-oauth-button";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await signInEmailAction(values.email, values.password);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Login successful");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
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
    </form>
  );
}
