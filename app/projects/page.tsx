"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
    {
    "title": "삼색고양이 - 웹툰 플랫폼 연결 서비스",
    "description": "사용자와 다양한 웹툰 플랫폼을 연결하는 웹사이트로, 태그 기반 웹툰 추천 및 작가 마케팅 지원 기능을 제공합니다.",
    "tech": ["Django", "React", "PostgreSQL", "AWS"],
    "features": ["태그 기반 웹툰 추천 시스템", "다중 플랫폼 연동", "작가 마케팅 도구", "반응형 UI 디자인"],
    "github": "https://github.com/Toonchu-team/toonchu_be"
    },
    {
    "title": "사용자 맞춤 설문조사 사이트",
    "description": "Pollloop은 설문 생성 및 관리 플랫폼입니다. 사용자는 다양한 유형의 설문을 쉽게 생성하고 관리할 수 있으며, 미응답 참여자를 확인하고 참여 요청 이메일을 전송할 수 있습니다.",
    "tech": ["Django", "Django REST Framework", "JWT", "OAuth 2.0"],
    "features": ["다중 소셜 로그인 통합", "JWT 기반 인증", "비밀번호 재설정 프로세스", "사용자 프로필 관리"],
    "github": "https://github.com/Hyunminmax/Pollloop"
    },
    {
    "title": "배우 캐스팅 플랫폼",
    "description": "배우와 제작사를 연결하는 온라인 캐스팅 플랫폼으로, 공고 관리, 배우 프로필, 지원 시스템을 제공합니다.",
    "tech": ["Django", "Django REST Framework", "PostgreSQL", "AWS S3"],
    "features": ["공고 관리 시스템", "배우 포트폴리오 관리", "지원 및 매칭 시스템", "권한 기반 접근 제어"],
    "github": "https://github.com/actgroupporject/act_project"
    }
    ]

export default function Projects() {
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress1(68), 500)
    const timer2 = setTimeout(() => setProgress2(90), 1000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

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

        <motion.h2
          className="text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          PROJECT
        </motion.h2>
        <div className="bg-emerald-600/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  {/* Default View */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg"
                        alt="Project thumbnail"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-emerald-700 w-6 h-6 rounded-full" />
                      </div>
                    </div>
                    <h3 className="mt-4 font-semibold">{project.title}</h3>
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-6 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">사용 기술:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">주요 기능:</h5>
                        <ul className="text-sm text-muted-foreground list-disc list-inside">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-emerald-600 hover:underline mt-4"
                    >
                      GitHub 저장소 보기
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="grid gap-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>완성도</span>
                <span>{progress1}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress1}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Progress value={progress1} className="h-4" />
              </motion.div>
            </div>
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>완성도</span>
                <span>{progress2}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress2}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Progress value={progress2} className="h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

