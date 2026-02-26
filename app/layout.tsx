import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "DJI Ecuador | Lanzamiento DJI Mavic 4 Pro — 15 de marzo 2026",
  description:
    "Distribuidor oficial DJI en Ecuador. Conoce el DJI Mavic 4 Pro y regístrate para el lanzamiento oficial el 15 de marzo de 2026.",
  keywords: [
    "DJI Ecuador",
    "DJI Mavic 4 Pro",
    "drones profesionales Ecuador",
    "distribuidor oficial DJI",
    "drones para fotografía aérea",
    "drones para video",
    "drones para inspección",
    "drones para topografía",
    "comprar drone DJI Ecuador",
    "lanzamiento DJI Ecuador",
  ],
  openGraph: {
    title: "DJI Ecuador | Lanzamiento DJI Mavic 4 Pro — 15 de marzo 2026",
    description:
      "Distribuidor oficial DJI en Ecuador. Conoce el DJI Mavic 4 Pro y regístrate para el lanzamiento oficial el 15 de marzo de 2026.",
    type: "website",
    locale: "es_EC",
    siteName: "DJI Ecuador",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJI Ecuador | Lanzamiento DJI Mavic 4 Pro — 15 de marzo 2026",
    description:
      "Distribuidor oficial DJI en Ecuador. Conoce el DJI Mavic 4 Pro y regístrate para el lanzamiento oficial el 15 de marzo de 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "DJI Ecuador",
                description: "Distribuidor oficial DJI en Ecuador",
                url: "https://dji.ec",
              },
              {
                "@context": "https://schema.org",
                "@type": "Event",
                name: "Lanzamiento DJI Mavic 4 Pro en Ecuador",
                startDate: "2026-03-15",
                description:
                  "Lanzamiento oficial del DJI Mavic 4 Pro en Ecuador por el distribuidor oficial.",
                organizer: {
                  "@type": "Organization",
                  name: "DJI Ecuador",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
