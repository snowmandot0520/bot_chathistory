"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";
import LoadingIcon from "./loading";

function SignoutButton() {
  const [isLoading, setIsLoading] = React.useState(false);
  const supabase = createClient();
  const router = useRouter();

  async function handleSignOut() {
    setIsLoading(true);
    await supabase.auth.signOut();
    setIsLoading(false);
    router.push("/login");
  }

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      disabled={isLoading}
      className="gap-2"
    >
      {isLoading && <LoadingIcon />}
      {isLoading ? "Signing out..." : "Sign out"}
    </Button>
  );
}

export default SignoutButton;
