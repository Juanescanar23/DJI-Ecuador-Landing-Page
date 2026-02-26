"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Countdown } from "@/components/countdown"

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)")
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])
  return isMobile
}

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c008ab847e82aa79971025ff63a04ceb-jQZpU8HLUcXa09oJ5nwYxIyl2ALHjg.jpg",
    alt: "DJI Mavic 4 Pro - Vista frontal con cámara Hasselblad triple",
    badge: "Distribuidor Oficial",
    title: "DJI Mavic 4 Pro",
    subtitle: "El futuro de la imagen aérea",
    description:
      "Prepárate para experimentar la tecnología de drones más avanzada del mundo. Regístrate ahora y sé el primero en conocer nuestro lanzamiento oficial.",
    cta: "registro",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b976c6de4bb48ffe42cbb0fc75cd91ad-8OLYJKRjeWZgAwgUMoISE9WL5960wu.jpg",
    alt: "DJI Air 3S en vuelo durante un atardecer espectacular",
    badge: "Compacto y Potente",
    title: "DJI Air 3S",
    subtitle: "Compacto sin compromisos",
    description:
      "Captura imágenes impresionantes desde cualquier lugar. El drone perfecto para viajes, fotografía aérea y creadores de contenido.",
    cta: "productos",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2d6d6972f0561f6b08b92afcd8a0ec8d%40origin-IUIeAv8cPdHJPxDyjqMq069NWAwdg1.jpg",
    alt: "DJI Matrice 350 RTK drone enterprise sobre fondo oscuro",
    badge: "Enterprise",
    title: "DJI Matrice 350 RTK",
    subtitle: "Rendimiento industrial sin límites",
    description:
      "Inspección, topografía y mapeo con la plataforma más confiable de la industria. Soluciones profesionales para los desafíos más exigentes.",
    cta: "productos",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d16f528a96b53c9b6917cca7a9df33af%401x-dkE56YBCuJmABqhyvntDK24muHaHlg.webp",
    alt: "DJI Agras drone agrícola fumigando cultivos en campo abierto",
    badge: "Agricultura",
    title: "DJI Agras T50 / T25",
    subtitle: "Agricultura de precisión inteligente",
    description:
      "Optimiza tus operaciones agrícolas con drones de fumigación y siembra de última generación. Mayor eficiencia, menor impacto ambiental.",
    cta: "productos",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/043f75382ee5ee7b0d078a593c272a0e%40origin-kHonkLwynV0godXwY08N4tjS6ZR1qb.jpg",
    alt: "DJI FlyCart 30 drone de carga volando sobre las nubes",
    badge: "Logística Aérea",
    title: "DJI FlyCart 30",
    subtitle: "Entrega aérea de nueva generación",
    description:
      "Transporte y entrega de cargas pesadas con tecnología de vuelo autónomo. La revolución de la logística está aquí.",
    cta: "productos",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b65966d83abdbc29c27fea2a082fb6d%401x-c57ZzbbTh48GKjT2shpxNz6G2pmTnF.webp",
    alt: "DJI Mavic 4 Pro y Mavic Mini plegados sobre superficie minimalista",
    badge: "Portabilidad",
    title: "Diseño plegable premium",
    subtitle: "Llévalo a cualquier aventura",
    description:
      "Tecnología de punta en un formato que cabe en tu mochila. Diseño plegable sin comprometer potencia ni calidad de imagen.",
    cta: "registro",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ceb244a09ec25edcf285c4ec072310a%401x-NnV66a5Mg0BnUVJQuQUEI22rqmUgQN.webp",
    alt: "DJI Neo 2 mini drone con protectores de hélice",
    badge: "Nuevo",
    title: "DJI Neo 2",
    subtitle: "Tu compañero de vuelo personal",
    description:
      "El drone más accesible y divertido de DJI. Perfecto para selfies aéreas, redes sociales y quienes se inician en el mundo de los drones.",
    cta: "productos",
  },
]

const AUTOPLAY_MS = 6000

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pausedRef = useRef(false)
  const touchStartRef = useRef<number | null>(null)
  const isMobile = useIsMobile()

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // autoplay
  useEffect(() => {
    if (pausedRef.current) return
    timeoutRef.current = setTimeout(next, AUTOPLAY_MS)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, next])

  const slide = slides[current]

  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const imageVariants = {
    enter: (d: number) => ({
      x: d > 0 ? "8%" : "-8%",
      opacity: 0,
      scale: 1.08,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? "-8%" : "8%",
      opacity: 0,
      scale: 1.04,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  }

  return (
    <section
      id="inicio"
      className="relative h-svh min-h-[600px] max-h-[1100px] w-full overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
      onTouchStart={(e) => {
        touchStartRef.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchStartRef.current === null) return
        const diff = e.changedTouches[0].clientX - touchStartRef.current
        if (Math.abs(diff) > 50) {
          if (diff < 0) next()
          else prev()
        }
        touchStartRef.current = null
      }}
      aria-roledescription="carousel"
      aria-label="Galería de productos DJI"
    >
      {/* Background images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlays for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050506]/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-28 sm:pb-32 lg:justify-center lg:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl"
            >
              <span className="mb-4 inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
                {slide.badge}
              </span>

              <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance">
                {slide.title}
              </h1>
              <p className="mt-2 text-xl font-medium text-foreground/80 sm:text-2xl lg:text-3xl">
                {slide.subtitle}
              </p>

              <p className="mt-3 hidden max-w-lg text-base leading-relaxed text-foreground/60 text-pretty sm:block sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-4">
                <button
                  onClick={() => scrollTo("registro")}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Registrarme Ahora
                </button>
                <button
                  onClick={() => scrollTo("productos")}
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5"
                >
                  Ver Productos
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Countdown - always visible */}
          <div className="mt-6 sm:mt-10">
            <p className="mb-2 text-[10px] uppercase tracking-widest text-foreground/40 sm:mb-3 sm:text-xs">
              Aperturamos el 15 de marzo de 2026
            </p>
            <Countdown />
          </div>
        </div>
      </div>

      {/* Arrow navigation - hidden on mobile, swipe instead */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-black/30 border border-white/10 text-foreground/70 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:left-6"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-black/30 border border-white/10 text-foreground/70 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-6"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators + progress bar */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative flex h-8 items-center justify-center"
              aria-label={`Ir al slide ${i + 1}: ${s.title}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? "h-2 w-8 bg-primary"
                    : "h-2 w-2 bg-white/30 group-hover:bg-white/50"
                }`}
              />
              {i === current && (
                <motion.span
                  className="absolute inset-0 flex items-center"
                  initial={false}
                >
                  <span className="block h-2 w-8 rounded-full overflow-hidden bg-primary/40">
                    <motion.span
                      className="block h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: AUTOPLAY_MS / 1000,
                        ease: "linear",
                      }}
                      key={`progress-${current}`}
                    />
                  </span>
                </motion.span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-24 right-4 z-20 sm:right-8 sm:top-28">
        <span className="text-xs font-medium tabular-nums text-foreground/40 tracking-wider">
          {String(current + 1).padStart(2, "0")}
          <span className="mx-1 text-foreground/20">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  )
}
