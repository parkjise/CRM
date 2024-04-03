import { NextRequest, NextResponse } from "next/server";
import { ROUTER_LINK } from "@/utils/constants/constant";

export const middleware = async (request: NextRequest) => {
  // const session: session = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/auth/session`,
  //   {
  //     headers: headers(),
  //     // cache: "no-store"
  //   }
  // ).then(async (res) => await res.json());
  //
  // const loggedIn = Object.keys(session).length > 0;
  // const pathname = request.nextUrl.pathname;
  //
  // if (pathname != "/admin/login" && !loggedIn) {
  //   return NextResponse.redirect(
  //     new URL("/admin/login", process.env.NEXT_PUBLIC_API_URL)
  //   );
  // }

  // 요청 헤더에서 로그인 여부를 확인할 수 있도록 쿠키에 접근
  const jwt = request.cookies.get("token");

  // 로그인 상태가 아니면 Redirection
  if (!jwt) {
    return NextResponse.redirect(
      new URL(
        ROUTER_LINK.IAM_LOGIN,
        request.url
        // `/login?callbackUrl=${encodeURIComponent(request.url)}`,
        // request.url
      )
    );
  }

  // 로그인 상태면 원래 요청한 경로로 이동한다.
  return NextResponse.next();
};

export const config = {
  // matcher: [ROUTER_LINK.MAIN, ROUTER_LINK.IAM_LOGIN],
  matcher: ["/", "/dashboards/:path*", "/account/:path*"],
};
