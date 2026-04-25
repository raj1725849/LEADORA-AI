import { NextRequest, NextResponse } from "next/server";

// All Supabase interaction happens server-side only.
// This prevents any Vercel build errors caused by browser env var exposure
// and keeps the service key out of the client bundle entirely.

interface InquiryPayload {
  name: string;
  company: string;
  phone: string;
  city: string;
  team_size: string;
  monthly_leads: string;
  current_tool: string;
  timeline: string;
  source: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: InquiryPayload = await req.json();

    // Validate required fields server-side
    const required: (keyof InquiryPayload)[] = ["name", "phone", "company", "city"];
    for (const field of required) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase env vars missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Use raw fetch instead of the supabase-js client to avoid
    // any SSR/edge-runtime compatibility issues on Vercel
    const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: body.name.trim(),
        company: body.company.trim(),
        phone: body.phone.trim(),
        city: body.city.trim(),
        team_size: body.team_size,
        monthly_leads: body.monthly_leads,
        current_tool: body.current_tool,
        timeline: body.timeline,
        source: body.source || "leadora-website",
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Supabase insert error:", errorText);
      return NextResponse.json(
        { error: "Failed to save inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
