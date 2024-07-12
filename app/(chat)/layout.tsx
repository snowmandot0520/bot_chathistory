import Nav from "@/components/nav";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-dvh">
        <Nav />
        <main className="pt-14 h-full">
          <div className="h-full p-4 overflow-y-hidden">{children}</div>
        </main>
      </div>
    </>
  );
}
