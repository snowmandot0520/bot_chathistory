export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4 container min-h-screen flex items-center">
      {children}
    </main>
  );
}
