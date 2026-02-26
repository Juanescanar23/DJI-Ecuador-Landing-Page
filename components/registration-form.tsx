"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { Loader2, CheckCircle2 } from "lucide-react"

const interestOptions = [
  { value: "mavic-4-pro", label: "Mavic 4 Pro" },
  { value: "otros-drones", label: "Otros drones" },
  { value: "accesorios", label: "Accesorios" },
  { value: "soporte", label: "Soporte" },
]

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  interest: string
  consent: boolean
}

export function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [serverError, setServerError] = useState("")

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = "Nombre requerido (mínimo 2 caracteres)"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim() || !emailRegex.test(form.email))
      errs.email = "Email inválido"
    if (!form.phone.trim() || form.phone.trim().length < 7)
      errs.phone = "Teléfono requerido (mínimo 7 dígitos)"
    if (!form.interest) errs.interest = "Selecciona un interés"
    if (!form.consent) errs.consent = "Debes aceptar ser contactado"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    setServerError("")

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar")
      }
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setServerError(
        err instanceof Error ? err.message : "Error inesperado. Intenta de nuevo."
      )
    }
  }

  function updateField(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  if (status === "success") {
    return (
      <section id="registro" className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <Reveal>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Registro recibido
              </h2>
              <p className="mt-3 text-muted-foreground">
                Te contactaremos antes del lanzamiento. Gracias por tu interés
                en DJI Ecuador.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="registro" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Regístrate para el lanzamiento
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Completa el formulario y sé el primero en conocer el lanzamiento
              oficial del DJI Mavic 4 Pro en Ecuador.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Nombre */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="reg-name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Nombre completo <span className="text-primary">*</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Tu nombre completo"
                  className={`w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.name ? "border-primary" : "border-white/[0.08]"
                  }`}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-primary">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className={`w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.email ? "border-primary" : "border-white/[0.08]"
                  }`}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-primary">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="reg-phone"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  WhatsApp / Teléfono <span className="text-primary">*</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+593 9XX XXX XXXX"
                  className={`w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                    errors.phone ? "border-primary" : "border-white/[0.08]"
                  }`}
                  required
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-primary">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="reg-city"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Ciudad
                </label>
                <input
                  id="reg-city"
                  type="text"
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="Quito, Guayaquil, Cuenca..."
                  className="w-full rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Interest */}
              <div>
                <label
                  htmlFor="reg-interest"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Interés <span className="text-primary">*</span>
                </label>
                <select
                  id="reg-interest"
                  value={form.interest}
                  onChange={(e) => updateField("interest", e.target.value)}
                  className={`w-full rounded-lg bg-white/[0.04] border px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none ${
                    errors.interest ? "border-primary" : "border-white/[0.08]"
                  } ${!form.interest ? "text-muted-foreground" : ""}`}
                  required
                  aria-invalid={!!errors.interest}
                  aria-describedby={errors.interest ? "interest-error" : undefined}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-card text-foreground">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p id="interest-error" className="mt-1.5 text-xs text-primary">
                    {errors.interest}
                  </p>
                )}
              </div>
            </div>

            {/* Consent */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/[0.04] text-primary accent-primary focus:ring-primary/50"
                  required
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Acepto ser contactado por DJI Ecuador para recibir información
                  sobre productos, lanzamientos y promociones.{" "}
                  <span className="text-primary">*</span>
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" className="mt-1.5 text-xs text-primary">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Server error */}
            {status === "error" && serverError && (
              <div className="mt-4 rounded-lg bg-primary/10 px-4 py-3">
                <p className="text-sm text-primary">{serverError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Registrarme Ahora"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
