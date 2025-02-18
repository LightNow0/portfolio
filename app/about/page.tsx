"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, BookOpen, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#40B093] to-[#2A7561]">
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Top Navigation */}
        <motion.nav
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-emerald-600/30 backdrop-blur-sm rounded-full px-6 py-3">
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
          </div>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/">
            <Button variant="ghost" className="text-white mb-8">
              <ArrowLeft className="mr-2" /> Back
            </Button>
          </Link>
        </motion.div>

        <div className="flex flex-col items-center justify-center mt-12">
          <motion.h2
            className="text-6xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ABOUT ME
          </motion.h2>

          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-600">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/okoko-715X2s2jIwtQhtuf3l9rAL7oK15sjZ.jpeg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="text-white text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">김명현(KIM Myeong Hyeon)</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-xl opacity-80">2000.09.15</span>
              </div>
              <div className="mt-4">
                <span className="bg-emerald-600/20 px-4 py-2 rounded-full">Backend - Developer</span>
              </div>
              <div className="flex items-center gap-2 justify-center mt-4">
                <span className="text-xl opacity-80">대전 거주</span>
              </div>
              <div>
                <span className="text-xl opacity-80">010.8915.2670</span>
              </div>

              {/* Additional Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    title: "자기소개",
                    icon: User,
                    content:
                      "안녕하세요! 백엔드 개발자 김명현입니다. 새로운 기술을 배우고 적용하는 것을 좋아하며, 효율적이고 안정적인 서버 시스템을 구축하는 것에 관심이 많습니다.",
                  },
                  {
                    title: "학력",
                    icon: GraduationCap,
                    content: "2016 - 2019: 전산응용기계과",
                  },
                  {
                    title: "부트캠프 \n(OZ_Codingschool)",
                    icon: BookOpen,
                    content:
                      "2024.08 - 2025.3: 백엔드 초격자 캠프\n- Django, FastAPI 기반 웹 서버 개발\n- 데이터베이스 설계 및 최적화\n- RESTful API 설계 및 구현\n- AWS 클라우드 인프라 구축 및 NCP, Docker사용",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  >
                    <Dialog onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Card className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer p-4">
                          <CardContent className="flex flex-col items-center pt-4">
                            <item.icon className="w-8 h-8 mb-2 text-white" />
                            <span className="text-white font-medium">{item.title}</span>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <AnimatePresence>
                        {isDialogOpen && (
                          <DialogContent forceMount>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                            >
                              <DialogHeader>
                                <DialogTitle>{item.title}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                {item.content.split("\n").map((line, i) => (
                                  <p key={i}>{line}</p>
                                ))}
                              </div>
                            </motion.div>
                          </DialogContent>
                        )}
                      </AnimatePresence>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

