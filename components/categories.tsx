"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const categories = [
  {
    title: "Drones Profesionales",
    description: "Sistemas avanzados de cámara y vuelo para cineastas y profesionales.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c008ab847e82aa79971025ff63a04ceb-jQZpU8HLUcXa09oJ5nwYxIyl2ALHjg.jpg",
    alt: "DJI Mavic 4 Pro - Drone profesional con cámara Hasselblad",
  },
  {
    title: "Drones Compactos",
    description: "Portabilidad y rendimiento para llevar a cualquier lugar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ceb244a09ec25edcf285c4ec072310a%401x-NnV66a5Mg0BnUVJQuQUEI22rqmUgQN.webp",
    alt: "DJI Neo 2 drone compacto con protectores de hélice",
  },
  {
    title: "Accesorios y Estabilizadores",
    description: "Gimbals, cámaras de acción y todo lo que necesitas para crear.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23ffce5e92c8af6bb02ad5f2ce0f0278%401x-rMKrcBQLYnm9X1qOTtlRMh9S2vmSg4.webp",
    alt: "DJI Osmo Mobile estabilizador de smartphone para video profesional",
  },
  {
    title: "Cámaras de Acción",
    description: "Captura cada momento con calidad profesional en cualquier entorno.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e7ccd70ec35caa63b1a76a85c44c2d29%401x-mmgq7VrhAqs8BzTkNaCduf5hH627H7.webp",
    alt: "DJI Osmo Action cámaras de acción compactas con pantalla táctil",
  },
]

function scrollToRegistro() {
  const el = document.querySelector("#registro")
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Categories() {
  return (
    <section id="categorias" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Explora nuestras categorías
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
              Encuentra la solución perfecta para tu proyecto, profesión o pasión.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="glass rounded-xl overflow-hidden group h-full flex flex-col transition-all duration-300 hover:bg-white/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <button
                    onClick={scrollToRegistro}
                    className="mt-3 inline-flex w-fit items-center text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {"Más información →"}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
