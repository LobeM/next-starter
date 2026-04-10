import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { SignupForm } from "../_components/forms/signup-form";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
