import { redirect } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import ResetPasswordForm from "../_components/forms/reset-password-form";

interface PageProps {
  searchParams: Promise<{ token: string }>;
}

export default async function ResetPasswordPage({ searchParams }: PageProps) {
  const { token } = await searchParams;

  if (!token) redirect("/sign-in");

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Reset Password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ResetPasswordForm token={token} />
        </CardContent>
      </Card>
    </div>
  );
}
