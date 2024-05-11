import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { items, email } = body;
  console.log(body);
  console.log(email);
  return NextResponse.json({
    message: "Data is coming",
  });
}
