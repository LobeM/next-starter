import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function VerifySuccess() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Success</h1>

      <p className="text-muted-foreground">
        Success! You have re-sent a verification link to your email.
      </p>

      <Button nativeButton={false} render={<Link href="/sign-in">Continue to Login</Link>} />
    </div>
  );
}
