import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl

    // Allow req if the following is true...
    // 1) token exists
    if (pathname.includes("/api/auth") || token) {
        return NextResponse.next();
    }

    // Redirect 
    if (!token && pathname !== "/login") {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        //console.log(url);
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: "/",
};