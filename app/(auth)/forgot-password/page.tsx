import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import ForgotPasswordForm from "../_components/forms/forgot-password-form";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot Password</CardTitle>
          <CardDescription>Enter your email below to reset your password</CardDescription>
          <CardContent className="p-6">
            <ForgotPasswordForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ForgotPassword;
