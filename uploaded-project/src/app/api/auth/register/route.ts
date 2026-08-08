import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  console.log("Auth register payload:", payload);
  return NextResponse.json({ ok: true, message: "Register request received." });
}
