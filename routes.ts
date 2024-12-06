// these routes do not require authentication
export const publicRoutes = ["/", "/new-verification"];

// these routes will redirect logged in users to /settings
export const authRoutes = ["/login", "/register"];

/*
prefix for API authentication routes
routes that start with this prefix are used for API authentication purposes
*/
export const apiAuthPrefix = "/api/auth";

// default redirect path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/settings";
