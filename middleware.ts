import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!_next/|_proxy/|_auth/|_root/|_static|static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const hostname = req.headers.get('host');

  if (req.method === 'OPTIONS') {
    return new Response('ok', { status: 200 });
  }

  if (hostname === 'api.markprompt.com' || hostname === 'api.localhost:3000') {
    const path = req.nextUrl.pathname;
  }

  return NextResponse.next();
}
