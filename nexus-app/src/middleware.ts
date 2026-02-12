import { NextRequest, NextResponse } from "next/server";

// Define public routes
const publicRoutes = ["/login", "/verification-otp", "/profile-setup"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route),
  );

  const user = request.cookies.get("user")?.value;

  // User not logged in trying to access protected route
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - static files
     * - next internal files
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
