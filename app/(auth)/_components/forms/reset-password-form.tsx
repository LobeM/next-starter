"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";

const formSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Password updated");
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
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
          <Button type="submit">Save Password</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
