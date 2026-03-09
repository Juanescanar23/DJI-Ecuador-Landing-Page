"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Reveal } from "@/components/reveal"
import { BadgeCheck, Headset, Shield, CalendarClock } from "lucide-react"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    // Stagger animation for benefit cards
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

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
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl text-balance leading-[1.1]">
                Tecnología de élite,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">soporte local</span>
              </h2>
              <p className="mt-6 text-zinc-400 text-pretty text-lg font-light leading-relaxed">
                Con DJI.ec, obtienes más que un drone. Obtienes la
                tranquilidad de un distribuidor oficial con atención cercana.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    ref={(el) => {
                      cardsRef.current[i] = el
                    }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="glass rounded-xl p-5 h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                    </motion.div>
                    <h3 className="text-sm font-bold text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </motion.div>
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
