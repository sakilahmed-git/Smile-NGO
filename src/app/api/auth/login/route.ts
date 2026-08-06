import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  console.log("Auth login payload:", payload);
  return NextResponse.json({ ok: true, message: "Login request received." });
}
