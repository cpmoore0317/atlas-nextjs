export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|about|$).*)",  // This regex protects all pages except for the home, about, and static resources
  ],
};
