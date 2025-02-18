"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    controls.start({ opacity: scrollY > 100 ? 1 : 0, y: scrollY > 100 ? 0 : 20 })
  }, [scrollY, controls])

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#40B093]">
      <Particles />

      {/* Bouncing Cloud */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="cloud-animation">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2021%20(2)-MTf72RvGbjcaes6gy9EDRm4fSn1mPG.png"
            alt="Cloud"
            width={800}
            height={400}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Backend Text and Motorcycle */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2022-dU6IAHTbnihUmrW4tcXJs2SRfLMxjV.png"
          alt="Backend"
          width={800}
          height={400}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 mt-[60vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/LightNow0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Github className="mr-2 h-4 w-4" /> GITHUB
            </Button>
          </motion.a>
          <motion.a href="mailto:lightnow0@gmail.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </motion.a>
        </motion.div>

        {/* Navigation */}
        <nav className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-emerald-600/30 backdrop-blur-sm rounded-full px-6 py-3">
          <div className="flex gap-8">
            <Link href="/about">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
                ABOUT ME
              </Button>
            </Link>
            <Link href="/skills">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
                SKILL
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
                PROJECT
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  )
}

