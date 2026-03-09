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
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Categorías Oficiales DJI
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
            Certificados y autorizados en todas las áreas de especialización DJI
          </p>
        </motion.div>

        {/* Desktop: horizontal scroll */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-4">
            {djiCategories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="group relative"
              >
                <div className="glass rounded-xl overflow-hidden aspect-[3/4] relative transition-all duration-500 hover:bg-white/[0.06] hover:scale-[1.02]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* DJI Logo watermark */}
                  <div className="absolute top-3 left-3 text-white/30 font-bold text-sm tracking-tight">
                    dji
                  </div>

                  {/* Category badge */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center justify-end text-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
                      <div className="w-5 h-5 rounded-full bg-white" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/95 leading-tight px-2">
                      {category.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: stacked cards */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {djiCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass rounded-lg overflow-hidden aspect-[3/4] relative transition-all duration-300 active:scale-95">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-active:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* DJI Logo */}
                <div className="absolute top-2 left-2 text-white/30 font-bold text-xs tracking-tight">
                  dji
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col items-center justify-end text-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-2 shadow-lg shadow-primary/20">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-white/95 leading-tight px-1">
                    {category.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="text-center opacity-40">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Distribuidor Oficial DJI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
