"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container min-h-dvh flex items-center justify-center w-full p-4">
      <Card className="w-full p-8">
        <CardHeader className="mb-6 pb-4 border-b">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Oops! Something went wrong.
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Error: {error.message}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-16 items-center">
            <div className="w-full">
              <p className="font-medium text-lg">
                It really happens once in a decade! But,
              </p>
              <h3 className="font-medium text-lg mb-6">
                What you can do from here?
              </h3>
              <ul className="list-disc pl-6 opacity-80 mb-4 space-y-1">
                <li>Make sure you are online with the stable network</li>
                <li>Try again or reload the page</li>
              </ul>

              <br />
              <br />
            </div>
            <div className="shrink-0 hidden md:block">
              <Image
                src="/general-error.svg"
                alt="Error"
                width={600}
                height={600}
                className="size-96"
              />
              <a
                className="inline-flex justify-end w-full text-muted-foreground text-[9px]"
                href="https://storyset.com/web"
              >
                Web illustrations by Storyset
              </a>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex gap-4 sm:flex-row flex-col">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
