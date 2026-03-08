import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./lib/auth";

export async function proxy(request: NextRequest) {
  const token = await getSession();

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
