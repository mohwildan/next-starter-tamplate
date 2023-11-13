import {NextRequest, NextResponse, userAgent} from "next/server";

export const config = {
    matcher: [`/((?!api|_next/static|_next/image|favicon.ico|login|register).*)`],
};
export function middleware(request: NextRequest) {
    //validate token

    if (!request.cookies.get('xx-access-token')?.value) {
        //redirect to login
        return NextResponse.rewrite(new URL('/login', request.url))
    }
}
