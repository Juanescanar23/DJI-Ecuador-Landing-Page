"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Reveal } from "@/components/reveal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const products = [
  {
    name: "DJI Mavic 4 Pro",
    tagline: "El futuro de la imagen aérea",
    ideal: "Ideal para: Fotografía profesional, video cinematográfico",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b65966d83abdbc29c27fea2a082fb6d%401x-c57ZzbbTh48GKjT2shpxNz6G2pmTnF.webp",
    alt: "DJI Mavic 4 Pro y Mavic 4 Mini plegados sobre superficie gris minimalista",
    featured: true,
  },
  {
    name: "DJI Air 3S",
    tagline: "Compacto sin compromisos",
    ideal: "Ideal para: Viajes, fotografía aérea, creadores de contenido",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b976c6de4bb48ffe42cbb0fc75cd91ad-8OLYJKRjeWZgAwgUMoISE9WL5960wu.jpg",
    alt: "DJI Air 3S en vuelo durante atardecer con vista panorámica",
    featured: false,
  },
  {
    name: "DJI Neo 2",
    tagline: "Tu compañero de vuelo personal",
    ideal: "Ideal para: Selfies aéreas, redes sociales, principiantes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ceb244a09ec25edcf285c4ec072310a%401x-NnV66a5Mg0BnUVJQuQUEI22rqmUgQN.webp",
    alt: "DJI Neo 2 mini drone compacto con protectores de hélice flotando en espacio blanco",
    featured: false,
  },
  {
    name: "DJI Matrice 350 RTK",
    tagline: "Rendimiento industrial sin límites",
    ideal: "Ideal para: Inspección, topografía, mapeo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d6d6972f0561f6b08b92afcd8a0ec8d%40origin-IUIeAv8cPdHJPxDyjqMq069NWAwdg1.jpg",
    alt: "DJI Matrice 350 RTK drone enterprise sobre fondo oscuro dramático",
    featured: false,
  },
  {
    name: "DJI Agras T50/T25",
    tagline: "Agricultura de precisión inteligente",
    ideal: "Ideal para: Fumigación, siembra, agricultura",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d16f528a96b53c9b6917cca7a9df33af%401x-dkE56YBCuJmABqhyvntDK24muHaHlg.webp",
    alt: "DJI Agras drone agrícola fumigando cultivos con sistema de precisión en campo abierto",
    featured: false,
  },
  {
    name: "DJI FlyCart 30",
    tagline: "Entrega aérea de nueva generación",
    ideal: "Ideal para: Logística, transporte, cargas pesadas",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/043f75382ee5ee7b0d078a593c272a0e%40origin-kHonkLwynV0godXwY08N4tjS6ZR1qb.jpg",
    alt: "DJI FlyCart 30 drone de carga volando sobre nubes con paquete colgando",
    featured: false,
  },
]

function scrollToRegistro() {
  const el = document.querySelector("#registro")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Products() {
  const featuredRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!featuredRef.current || !imageRef.current) return

    // GSAP parallax effect for featured product image
    gsap.to(imageRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: featuredRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="productos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Conoce nuestros drones profesionales y soluciones de vuelo
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Desde fotografía aérea hasta agricultura de precisión, tenemos el
              drone perfecto para cada necesidad.
            </p>
          </div>
        </Reveal>

        {/* Featured product */}
        <Reveal>
          <motion.div
            ref={featuredRef}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass rounded-2xl overflow-hidden mb-8 group"
          >
            <div className="flex flex-col lg:flex-row">
              <div
                ref={imageRef}
                className="relative w-full lg:w-3/5 aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={products[0].image}
                    alt={products[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-2/5">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider mb-4"
                >
                  Destacado
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl font-bold text-foreground sm:text-3xl"
                >
                  {products[0].name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-2 text-lg text-muted-foreground"
                >
                  {products[0].tagline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-4 text-sm text-muted-foreground"
                >
                  {products[0].ideal}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  onClick={scrollToRegistro}
                  className="mt-6 inline-flex w-fit items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  Solicitar información
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Grid of products */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(1).map((product, i) => (
            <Reveal key={product.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass rounded-xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.tagline}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {product.ideal}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToRegistro}
                    className="mt-4 inline-flex w-fit items-center rounded-lg glass glass-hover px-4 py-2 text-xs font-semibold text-foreground"
                  >
                    Solicitar información
                  </motion.button>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
