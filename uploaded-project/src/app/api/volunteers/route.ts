import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  console.log("Volunteer application payload:", payload);
  return NextResponse.json({ ok: true, message: "Volunteer application submitted." });
}
