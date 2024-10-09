import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// List of protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', 
  '/forum(.*)',
]);

export default clerkMiddleware((auth, req) => {
  console.log(`Request URL: ${req.url}`);  // Log the request URL
  if (isProtectedRoute(req)) {
    console.log(`Protected route accessed: ${req.url}`);  // Log if the route is protected
    auth().protect();  // Protect the route if it matches
  }
});

export const config = {
  matcher: [
    // Match all routes except static files and _next
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Match API routes
    '/(api|trpc)(.*)',
  ],
};