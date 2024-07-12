"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { AppProgressBar } from "next-nprogress-bar";

function ClientProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <AppProgressBar
        shallowRouting
        color="#1a57db"
        height="4px"
        // options={{ showSpinner: false }}
      />
      {children}
    </ThemeProvider>
  );
}

export default ClientProvider;
