import { NextResponse } from "next/server";
import { enquirySchema, normalizePhone } from "@/lib/validations";
import { saveLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const lead = await saveLead({
      name: data.name,
      phone: normalizePhone(data.phone),
      email: data.email || undefined,
      flatSize: data.flatSize,
      message: data.message || undefined,
      source: "website-enquiry",
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to save enquiry. Please try again." },
      { status: 500 }
    );
  }
}
