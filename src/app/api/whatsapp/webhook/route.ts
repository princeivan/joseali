import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token === VERIFY_TOKEN &&
    challenge
  ) {
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new NextResponse("Forbidden", {
    status: 403,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log(
      "[WhatsApp Webhook]",
      JSON.stringify(body, null, 2)
    );

    return NextResponse.json(
      { received: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("[WhatsApp Webhook Error]", error);

    return NextResponse.json(
      { error: "Invalid webhook payload" },
      { status: 400 }
    );
  }
}