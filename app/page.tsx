import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Categories } from "@/components/categories"
import { Benefits } from "@/components/benefits"
import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
      <Products />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
      <Categories />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
      <Benefits />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
      <RegistrationForm />
      <Footer />
    </main>
  )
}
