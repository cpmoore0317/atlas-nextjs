import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import { signIn } from "@/lib/auth"; // Import the signIn function from auth
import Link from "next/link"; // Import Link for client-side navigation

export default function Page() {
  return (
    <main className="w-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Unlock the Power of the Web
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover our suite of tools and services to build, deploy, and scale your web applications with ease.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* Updated form for signing in */}
              <form
                action={async () => {
                  "use server";
                  await signIn("default", { redirectTo: "/ui" }); // Redirect to /ui after sign-in
                }}
              >
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow">
                  Sign In
                </button>
              </form>
              {/* Updated Link component for Learn More */}
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Link>
            </div>
          </div>
          <Image
            src={placeholder}
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover w-full max-w-[550px]"
          />
        </div>
      </div>
    </main>
  );
}
