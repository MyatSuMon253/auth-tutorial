import { auth } from "./auth";

export default auth((req) => {
  console.log("ROUTE: ", req.nextUrl);
});

export const config = {
  matcher: ["/login"],
};
