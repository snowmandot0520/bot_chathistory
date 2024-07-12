"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ExitIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";

function SignoutButton() {
  const [isPending, startTransition] = React.useTransition();
  const supabase = createClient();
  const router = useRouter();

  async function handleSignOut() {
    startTransition(async () => {
      await supabase.auth.signOut();
      router.push("/login");
    });
  }

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      disabled={isPending}
      className="gap-2"
      size="icon"
      loading={isPending}
      loadingText=""
    >
      <ExitIcon />
    </Button>
  );
}

export default SignoutButton;
