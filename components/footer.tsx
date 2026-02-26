"use client"

import { useState } from "react"

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 DJI Ecuador &mdash; Lanzamiento 15 de marzo
            </p>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de privacidad
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPrivacy(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Política de privacidad"
        >
          <div
            className="glass rounded-2xl max-w-lg w-full p-6 sm:p-8 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-foreground mb-4">
              Política de privacidad
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                En DJI Ecuador, respetamos tu privacidad. Los datos recopilados
                a través del formulario de registro (nombre, email, teléfono,
                ciudad e interés) se utilizan exclusivamente para contactarte
                sobre el lanzamiento y productos DJI.
              </p>
              <p>
                No compartimos tu información personal con terceros sin tu
                consentimiento. Puedes solicitar la eliminación de tus datos en
                cualquier momento contactándonos.
              </p>
              <p>
                Al registrarte, aceptas recibir comunicaciones de DJI Ecuador
                relacionadas con productos, lanzamientos y promociones.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 w-full inline-flex items-center justify-center rounded-lg glass glass-hover px-4 py-2.5 text-sm font-semibold text-foreground transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
