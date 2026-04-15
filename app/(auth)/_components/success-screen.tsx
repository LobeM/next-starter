import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SuccessScreen({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-bold">Success</h1>

      <p className="text-muted-foreground">{message}</p>

      <Button nativeButton={false} render={<Link href="/sign-in">Continue to Login</Link>} />
    </div>
  );
}
