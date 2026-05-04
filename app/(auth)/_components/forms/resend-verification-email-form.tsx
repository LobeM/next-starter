"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormGenerator from "@/components/forms/form-generator";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { sendVerificationEmail } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.email("Invalid email address"),
});

export default function ResendVerificationEmailForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver is not typed correctly, so we need to cast it to any
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await sendVerificationEmail({
      email: values.email,
      callbackURL: "/verify",
      fetchOptions: {
        onRequest: () => {
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("Verification email sent");
          router.push("/verify/success");
        },
      },
    });
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
          <Field>
            <Button type="submit">Resend Verification Email</Button>
          </Field>
        </FieldGroup>
      </fieldset>
    </form>
  );
}
