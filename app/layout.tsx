import ClientProvider from "@/components/client-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soham Bhikadiya | Mistral",
  description:
    "An AI Mistral Chat is a chat application that uses AI to generate responses. Custom fine tuning of the model that gives information about me",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
        />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
