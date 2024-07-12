import { createClient } from "@/lib/supabase/server";
import { Button } from "./ui/button";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import SignoutButton from "./signout-button";

async function Nav() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 bg-background shadow-md w-full z-50 p-2 border-b h-14">
      <nav className="flex justify-between items-center sm:container">
        <Link href="/">
          <h3 className="md:text-xl font-semibold">Soham Bhikadiya</h3>
        </Link>

        <div className="flex gap-2 items-center">
          {user ? (
            <div className="flex gap-2 items-center">
              <p className="text-muted-foreground text-sm">
                {user.user_metadata.full_name}
              </p>
              <SignoutButton />
            </div>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
