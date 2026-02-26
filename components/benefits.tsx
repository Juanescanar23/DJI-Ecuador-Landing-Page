"use client"

import { Reveal } from "@/components/reveal"
import { BadgeCheck, Headset, Shield, CalendarClock } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    title: "Distribuidor oficial en Ecuador",
    description:
      "Productos 100% originales con la garantía y respaldo de DJI a nivel mundial.",
    icon: BadgeCheck,
  },
  {
    title: "Asesoría para elegir el drone ideal",
    description:
      "Nuestro equipo te guía para encontrar la solución exacta según tu uso profesional o creativo.",
    icon: Headset,
  },
  {
    title: "Garantía y soporte",
    description:
      "Servicio técnico local, repuestos originales y atención personalizada en Ecuador.",
    icon: Shield,
  },
  {
    title: "Disponibilidad y lanzamiento oficial",
    description:
      "Sé el primero en acceder a los últimos modelos DJI el día de su lanzamiento.",
    icon: CalendarClock,
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Image side */}
          <Reveal className="flex-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ba0c939e-6b2c-4347-b9aa-37555e4a7721-9RMsTFpnQz8MCkhohwzCYhLpgQVC0y.png"
                alt="Técnico realizando mantenimiento y reparación de drone DJI con herramientas de precisión"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050506]/60 via-transparent to-transparent lg:bg-gradient-to-l" />
            </div>
          </Reveal>

          {/* Content side */}
          <div className="flex-1">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Tecnología de élite, soporte local
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Con DJI Ecuador, obtienes más que un drone. Obtienes la
                tranquilidad de un distribuidor oficial con atención cercana.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <Reveal key={b.title} delay={i * 0.08}>
                    <div className="glass rounded-xl p-5 h-full transition-all duration-300 hover:bg-white/[0.06]">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground">
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {b.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-8 glass rounded-xl p-5 flex items-center gap-4">
                <div className="h-10 w-1 rounded-full bg-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  Sé el primero en enterarte del lanzamiento del 15 de marzo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
