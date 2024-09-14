import { NextResponse } from "next/server";
import { GetSession } from "./helper/GetSession";
import Actions from "./actions/actions";

export async function middleware(request) {

    const path = request.nextUrl.pathname;
    const { data } = await Actions.User.Info(GetSession());

    const isUserPath = path === '/user/login';

    if (isUserPath) {
        if (data?.id) { return NextResponse.redirect(new URL('/', request.url)); }
    } else {
        if (!data?.id) { return NextResponse.redirect(new URL('/user/login', request.url)); }
    }
};
export const config = {
    matcher: [
        "/admin/:path*",
        "/xyz/:path*"
    ]
}



