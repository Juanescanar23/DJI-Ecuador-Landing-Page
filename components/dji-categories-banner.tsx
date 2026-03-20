"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const djiCategories = [
  {
    id: "authorized-reseller",
    title: "Distribuidor Autorizado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c008ab847e82aa79971025ff63a04ceb-jQZpU8HLUcXa09oJ5nwYxIyl2ALHjg.jpg",
    label: "DISTRIBUIDOR AUTORIZADO",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d6d6972f0561f6b08b92afcd8a0ec8d%40origin-IUIeAv8cPdHJPxDyjqMq069NWAwdg1.jpg",
    label: "ENTERPRISE",
  },
  {
    id: "agriculture",
    title: "Agricultura",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d16f528a96b53c9b6917cca7a9df33af%401x-dkE56YBCuJmABqhyvntDK24muHaHlg.webp",
    label: "AGRICULTURA",
  },
  {
    id: "academy",
    title: "Academia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b976c6de4bb48ffe42cbb0fc75cd91ad-8OLYJKRjeWZgAwgUMoISE9WL5960wu.jpg",
    label: "ACADEMIA",
  },
  {
    id: "certified-repair",
    title: "Centro de Reparación Certificado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/043f75382ee5ee7b0d078a593c272a0e%40origin-kHonkLwynV0godXwY08N4tjS6ZR1qb.jpg",
    label: "CENTRO DE REPARACIÓN CERTIFICADO",
  },
]

export function DjiCategoriesBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean)

    // GSAP animation on scroll
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.92,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Categorías Oficiales DJI
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto text-pretty sm:text-base">
            Certificados y autorizados en todas las áreas de especialización DJI
          </p>
        </motion.div>

        {/* Desktop: horizontal banner */}
        <div className="hidden lg:block">
          <div className="flex rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
            {djiCategories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="group relative flex-1 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden transition-all duration-500 hover:flex-[1.15]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    sizes="20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80" />

                  {/* Vertical separator line */}
                  {index < djiCategories.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
                  )}

                  {/* DJI Logo watermark */}
                  <Image
                    src="/logo-white.svg"
                    alt="DJI"
                    width={50}
                    height={19}
                    className="absolute top-4 left-4 opacity-30 h-4 w-auto"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <div className="w-3 h-3 rounded-full bg-white mb-4 mx-auto shadow-lg shadow-white/20" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white leading-tight max-w-[150px]">
                        {category.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: compact grid */}
        <div className="lg:hidden rounded-xl overflow-hidden border border-white/[0.06] shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {djiCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative h-[240px] sm:h-[280px] overflow-hidden transition-all duration-300 active:brightness-110">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-active:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                  {/* Grid separators */}
                  {index % 2 === 0 && index < djiCategories.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 sm:hidden" />
                  )}
                  {index < 2 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
                  )}
                  {index < 3 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
                  )}

                  {/* DJI Logo */}
                  <Image
                    src="/logo-white.svg"
                    alt="DJI"
                    width={40}
                    height={15}
                    className="absolute top-3 left-3 opacity-30 h-3 w-auto"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white mb-3 shadow-lg shadow-white/20" />
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-white leading-tight px-2 max-w-[120px]">
                      {category.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 lg:mt-10 flex justify-center"
        >
          <div className="text-center opacity-30">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
              Distribuidor Oficial DJI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
