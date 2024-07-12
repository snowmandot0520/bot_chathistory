import { getUser } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (user.aud === "authenticated") redirect("/");
  return (
    <main className="p-4 container min-h-screen flex items-center">
      {children}
    </main>
  );
}
