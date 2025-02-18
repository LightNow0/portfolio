"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Language",
    icon: "🔤",
    items: ["Python"],
    description: "주력 프로그래밍 언어",
  },
  {
    category: "Framework",
    icon: "🏗️",
    items: ["Django", "FastAPI"],
    description: "웹 애플리케이션 개발",
  },
  {
    category: "Operating System",
    icon: "💻",
    items: ["Linux"],
    description: "서버 운영체제",
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL"],
    description: "데이터 관리 및 설계",
  },
  {
    category: "Distribution",
    icon: "🚀",
    items: ["AWS", "NCP", "Docker"],
    description: "배포 및 인프라",
  },
  {
    category: "Version",
    icon: "📝",
    items: ["GIT"],
    description: "버전 관리",
  },
  {
    category: "API",
    icon: "🔌",
    items: ["Swagger", "Ninja", "Postman"],
    description: "API 개발 및 테스트",
  },
  {
    category: "Environment",
    icon: "⚙️",
    items: ["VSCode", "PyCharm"],
    description: "개발 환경",
  },
  {
    category: "Management",
    icon: "📊",
    items: ["Notion", "JIRA", "BACKLOG"],
    description: "프로젝트 관리",
  },
  {
    category: "Design",
    icon: "🎨",
    items: ["Figma"],
    description: "디자인 협업",
  },
]

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

        <Link href="/">
          <Button variant="ghost" className="text-white mb-8">
            <ArrowLeft className="mr-2" /> Back
          </Button>
        </Link>

        <h2 className="text-6xl font-bold text-white text-center mb-16">SKILL</h2>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
              onHoverStart={() => setSelectedCategory(skill.category)}
              onHoverEnd={() => setSelectedCategory(null)}
            >
              <div className="flex items-center gap-8 bg-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/20">
                <div className="flex items-center gap-4 w-64">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-white font-medium">{skill.category}</h3>
                    <p className="text-white/60 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <motion.span
                        key={item}
                        className="bg-emerald-600/30 text-white px-4 py-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              {selectedCategory === skill.category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 px-6 py-4 bg-white/5 rounded-lg"
                >
                  <p className="text-white/80">{skill.description}에 사용되는 기술들입니다.</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

