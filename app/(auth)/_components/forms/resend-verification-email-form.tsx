"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";

const formSchema = z.object({
  email: z.email("Invalid email address"),
});

export default function ResendVerificationEmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Verification email sent");
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
        <Field>
          <Button type="submit">Resend Verification Email</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
