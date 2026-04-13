import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import ResendVerificationEmailForm from "../_components/forms/resend-verification-email-form";

const Verify = () => {
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
