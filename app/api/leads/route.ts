import { NextResponse } from "next/server"

interface LeadPayload {
  name: string
  email: string
  phone: string
  city?: string
  interest: string
  consent: boolean
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json()

    // Validate required fields
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "El nombre es requerido (mínimo 2 caracteres)." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      )
    }

    if (!body.phone || body.phone.trim().length < 7) {
      return NextResponse.json(
        { error: "El teléfono es requerido (mínimo 7 dígitos)." },
        { status: 400 }
      )
    }

    if (!body.interest) {
      return NextResponse.json(
        { error: "Selecciona un interés." },
        { status: 400 }
      )
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: "Debes aceptar ser contactado." },
        { status: 400 }
      )
    }

    const lead = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      city: body.city?.trim() || "",
      interest: body.interest,
      timestamp: new Date().toISOString(),
    }

    console.log("[DJI Ecuador] New lead registered:", JSON.stringify(lead, null, 2))

    // Forward to webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        })
        console.log("[DJI Ecuador] Lead forwarded to webhook successfully")
      } catch (webhookError) {
        console.error("[DJI Ecuador] Webhook forwarding failed:", webhookError)
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json(
      { success: true, message: "Registro recibido. Te contactaremos antes del lanzamiento." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    )
  }
}
