import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  CheckIcon,
  CubeIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LightningBoltIcon,
  LinkedInLogoIcon,
  LockClosedIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

interface FeatureProps {
  Icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    Icon: <LockClosedIcon className="size-8" />,
    title: "Authentication",
    description:
      "Secure and reliable authentication system, built with supabase",
  },
  {
    Icon: <CubeIcon className="size-8" />,
    title: "Chatbot",
    description: "Fast and responsive chatbot, powered by Mistral AI model",
  },
  {
    Icon: <MixerVerticalIcon className="size-8" />,
    title: "Fine tuning",
    description:
      "Custom fine tuning of the model that gives information about me",
  },
  {
    Icon: <GitHubLogoIcon className="size-8" />,
    title: "Open Source",
    description: "The project is open source and free to use",
  },
];

export default function Hero() {
  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Soham Bhikadiya
              </span>{" "}
            </h1>{" "}
            AI using{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-primary  to-primary/70 text-transparent bg-clip-text">
                Mistral
              </span>{" "}
              Model
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            A full stack web developer with expertise in React, Next.js and
            TypeScript.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button className="w-full md:w-1/3" asChild>
              <Link href="/chat">Get Started</Link>
            </Button>
            <Button variant="outline" className="max-md:w-full gap-2" asChild>
              <a href="https://github.com/soham2k06" target="_blank">
                <GitHubLogoIcon className="mr-2" />
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className="z-10">
          <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Testimonial */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-background/10">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src="https://github.com/shadcn.png" />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">John Doe React</CardTitle>
                  <CardDescription>@john_doe</CardDescription>
                </div>
              </CardHeader>

              <CardContent>Awesome work!</CardContent>
            </Card>

            {/* Team */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-background/10">
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src="/soham.png"
                  alt="user avatar"
                  className="absolute -top-12 rounded-full size-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">Soham Bhikadiya</CardTitle>
                <CardDescription className="font-normal text-primary">
                  Full stack Developer
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  I really enjoy transforming ideas into functional software
                  that exceeds expectations
                </p>
              </CardContent>

              <CardFooter>
                <div className="space-x-2">
                  <Button asChild size="icon" variant="ghost">
                    <a
                      rel="noreferrer noopener"
                      href="https://github.com/soham2k06"
                      target="_blank"
                    >
                      <span className="sr-only">Github icon</span>
                      <GitHubLogoIcon className="size-5" />
                    </a>
                  </Button>
                  <Button asChild size="icon" variant="ghost">
                    <a
                      rel="noreferrer noopener"
                      href="https://sohamb.tech"
                      target="_blank"
                    >
                      <span className="sr-only">Website icon</span>
                      <GlobeIcon className="size-5" />
                    </a>
                  </Button>

                  <Button asChild size="icon" variant="ghost">
                    <a
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/in/soham-bhikadiya"
                      target="_blank"
                    >
                      <span className="sr-only">Linkedin icon</span>
                      <LinkedInLogoIcon className="size-5" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Pricing */}
            <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-background/10">
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  Free
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>

                <CardDescription>
                  Lorem ipsum dolor sit, amet ipsum consectetur adipisicing
                  elit.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/chat">Start Free Trial</Link>
                </Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {[
                    "No credit card required",
                    "Free till 26 July",
                    "Mistral Small Latest",
                  ].map((benefit: string) => (
                    <span key={benefit} className="flex items-center">
                      <CheckIcon className="text-green-500 size-5" />
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>

            {/* Service */}
            <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-background/10">
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div className="mt-1 bg-primary/20 p-4 rounded-2xl">
                  <LightningBoltIcon className="size-12" />
                </div>
                <div>
                  <CardTitle>Fast as a lightning</CardTitle>
                  <CardDescription className="text-md mt-2">
                    The chatbot is designed to be fast and responsive
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Shadow effect */}
        <div className="custom-shadow"></div>
      </section>

      <section className="container text-center py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold ">
          What's{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Shipped{" "}
          </span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          The Chatbot is designed to be fast and responsive. It is built with
          the latest technologies and is highly scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ Icon, title, description }: FeatureProps) => (
            <Card key={title} className="bg-card">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {Icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="container py-12 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} <strong>Soham Bhikadiya</strong>.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
