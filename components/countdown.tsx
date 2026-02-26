"use client"

import { useState, useEffect } from "react"

const LAUNCH_DATE = new Date("2026-03-15T00:00:00-05:00") // Ecuador timezone

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="glass rounded-lg px-2 py-1.5 min-w-[48px] text-center text-xl font-bold tabular-nums text-foreground sm:text-3xl sm:min-w-[64px] sm:px-3 sm:py-2">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        {["Días", "Horas", "Min", "Seg"].map((label) => (
          <CountdownUnit key={label} value={0} label={label} />
        ))}
      </div>
    )
  }

  if (!timeLeft) {
    return (
      <a
        href="#productos"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
      >
        Ya abrimos — Ver productos
      </a>
    )
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <CountdownUnit value={timeLeft.days} label="Días" />
      <span className="text-xl font-light text-muted-foreground pb-5">:</span>
      <CountdownUnit value={timeLeft.hours} label="Horas" />
      <span className="text-xl font-light text-muted-foreground pb-5">:</span>
      <CountdownUnit value={timeLeft.minutes} label="Min" />
      <span className="text-xl font-light text-muted-foreground pb-5">:</span>
      <CountdownUnit value={timeLeft.seconds} label="Seg" />
    </div>
  )
}
