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
    title: "Authorized Reseller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c008ab847e82aa79971025ff63a04ceb-jQZpU8HLUcXa09oJ5nwYxIyl2ALHjg.jpg",
    label: "AUTHORIZED RESELLER",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d6d6972f0561f6b08b92afcd8a0ec8d%40origin-IUIeAv8cPdHJPxDyjqMq069NWAwdg1.jpg",
    label: "ENTERPRISE",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d16f528a96b53c9b6917cca7a9df33af%401x-dkE56YBCuJmABqhyvntDK24muHaHlg.webp",
    label: "AGRICULTURE",
  },
  {
    id: "academy",
    title: "Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b976c6de4bb48ffe42cbb0fc75cd91ad-8OLYJKRjeWZgAwgUMoISE9WL5960wu.jpg",
    label: "ACADEMY",
  },
  {
    id: "certified-repair",
    title: "Certified Repair Centre",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/043f75382ee5ee7b0d078a593c272a0e%40origin-kHonkLwynV0godXwY08N4tjS6ZR1qb.jpg",
    label: "CERTIFIED REPAIR CENTRE",
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
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            Categorías Oficiales DJI
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty text-sm sm:text-base">
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
                <div className="glass rounded-lg overflow-hidden aspect-[3/4] relative transition-all duration-500 hover:bg-white/[0.08] hover:scale-[1.02]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center justify-end text-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                      <div className="w-5 h-5 rounded-full bg-primary/80" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 leading-tight">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col items-center justify-end text-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/20">
                    <div className="w-4 h-4 rounded-full bg-primary/80" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 leading-tight px-1">
                    {category.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DJI Logo watermark */}
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
