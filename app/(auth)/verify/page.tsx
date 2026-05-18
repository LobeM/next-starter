import { redirect } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import ResendVerificationEmailForm from "../_components/forms/resend-verification-email-form";

interface PageProps {
  searchParams: Promise<{ error: string }>;
}

const Verify = async ({ searchParams }: PageProps) => {
  const error = (await searchParams).error;

  if (!error) redirect("/dashboard");

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Verify Email</CardTitle>
          <CardDescription>Enter your email below to verify your email</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ResendVerificationEmailForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;
