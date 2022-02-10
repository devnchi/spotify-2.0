import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    //token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl

    //allow the requests if the following are true:
    // 1) it's a request for the next-auth session & provider fetching
    // 2) the token exists
    
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next;
    }

    // //redirect the user if they don't have a token AND are requsting a protected route
    // if (!token && pathname !== '/login') {
    //     return NextResponse.redirect('/login');
    // }
}