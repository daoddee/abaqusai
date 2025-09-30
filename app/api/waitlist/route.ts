import { NextResponse } from "next/server";

export const runtime = "edge"; // or remove this line to use Node.js runtime

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, useCase, consent } = body || {};
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    // TODO: persist (DB/Sheet). For now, succeed:
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Bad Request" }, { status: 400 });
  }
}
