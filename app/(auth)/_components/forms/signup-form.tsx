"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { cn } from "@/lib/utils";

import SignInOauthButton from "../sign-in-oauth-button";

const formSchema = z
  .object({
    name: z.string().min(2, "Full name must be at least 2 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Account created");
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <FormGenerator
          type="text"
          inputType="input"
          name="name"
          label="Full Name"
          placeholder="John Doe"
          control={form.control as Control<any>}
        />
        <FormGenerator
          type="email"
          inputType="input"
          name="email"
          label="Email"
          placeholder="m@example.com"
          description="We'll use this to contact you. We will not share your email with anyone else."
          control={form.control as Control<any>}
        />
        <FormGenerator
          type="password"
          inputType="input"
          name="password"
          label="Password"
          autoComplete="new-password"
          description="Must be at least 8 characters long."
          control={form.control as Control<any>}
        />
        <FormGenerator
          type="password"
          inputType="input"
          name="confirmPassword"
          label="Confirm Password"
          autoComplete="new-password"
          description="Please confirm your password."
          control={form.control as Control<any>}
        />
        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
          Or continue with
        </FieldSeparator>
        <Field>
          <SignInOauthButton provider="apple" />
          <SignInOauthButton provider="google" />
          <SignInOauthButton provider="github" />
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
