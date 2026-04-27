import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = [
  "/dashboard",
  "/admin",
  "/officer",
  "/landlord",
  "/settings",
  "/profile",
  "/favorites",
  "/inquiries",
  "/bookings",
  "/payments",
];

// Routes that should redirect to dashboard if already logged in
const authRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

// Public routes that don't need any redirection
const publicRoutes = ["/", "/properties", "/about", "/contact", "/terms", "/privacy"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get tokens from cookies
  const accessToken = request.cookies.get("accessToken")?.value;
  const userCookie = request.cookies.get("userData")?.value || request.cookies.get("user")?.value;
  
  const isAuthenticated = !!accessToken;
  
  // Parse user data if available
  let user = null;
  if (userCookie) {
    try {
      user = JSON.parse(userCookie);
    } catch (e) {
      // Invalid user cookie
    }
  }

  // Check if current path is protected
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname.startsWith(route)
  );

  // Check if current path is an auth route
  const isAuthRoute = authRoutes.some(
    (route) => pathname.startsWith(route)
  );

  // If trying to access protected route without auth, redirect to login with returnUrl
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("returnUrl", pathname);
    
    // Add any existing query params to returnUrl
    const searchParams = request.nextUrl.searchParams.toString();
    if (searchParams) {
      loginUrl.searchParams.set("returnUrl", `${pathname}?${searchParams}`);
    }
    
    return NextResponse.redirect(loginUrl);
  }

  // If trying to access auth routes while authenticated, redirect to dashboard
  if (isAuthRoute && isAuthenticated) {
    // Don't redirect if there's a returnUrl (user wants to go somewhere after)
    const returnUrl = request.nextUrl.searchParams.get("returnUrl");
    if (returnUrl) {
      return NextResponse.next();
    }

    // Redirect to role-based dashboard
    let dashboardUrl = "/dashboard";
    if (user?.role) {
      switch (user.role) {
        case "SUPER_ADMIN":
        case "ADMIN":
        case "MANAGER":
          dashboardUrl = "/admin/dashboard";
          break;
        case "FIELD_OFFICER":
          dashboardUrl = "/officer/dashboard";
          break;
        case "LANDLORD":
          dashboardUrl = "/landlord/dashboard";
          break;
        default:
          dashboardUrl = "/dashboard";
      }
    }

    return NextResponse.redirect(new URL(dashboardUrl, request.url));
  }

  // Role-based route protection
  if (isAuthenticated && user?.role) {
    // Admin routes - only for admin roles
    if (pathname.startsWith("/admin") && !["SUPER_ADMIN", "ADMIN", "MANAGER"].includes(user.role)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Officer routes - only for field officers
    if (pathname.startsWith("/officer") && user.role !== "FIELD_OFFICER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Landlord routes - only for landlords
    if (pathname.startsWith("/landlord") && user.role !== "LANDLORD") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
  ],
};