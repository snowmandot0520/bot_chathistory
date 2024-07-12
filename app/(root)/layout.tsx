import Nav from "@/components/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main className="mt-14 p-4 container">{children}</main>
    </>
  );
}
