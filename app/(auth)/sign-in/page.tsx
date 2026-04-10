import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import LoginForm from "../_components/forms/login-form";

const SignIn = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login into your Next.js Starter account</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
