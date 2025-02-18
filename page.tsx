import Image from "next/image"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#40B093]">
      {/* Hero Section */}
      <section className="relative px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-white text-6xl font-bold mb-4">BACKEND</h1>
            <p className="text-white/80">백엔드 개발자의 발란한길로!</p>
            <div className="flex gap-4 mt-6">
              <Button variant="secondary" className="gap-2">
                <Github className="h-5 w-5" />
                GITHUB
              </Button>
              <Button variant="secondary" className="gap-2">
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-4 bg-emerald-600/20 p-2 rounded-full w-fit mb-12">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
              ABOUT ME
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
              SKILL
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-emerald-600/30">
              PROJECT
            </Button>
          </nav>

          {/* About Section */}
          <div className="bg-emerald-600/20 rounded-2xl p-8 mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">ABOUT ME</h2>
            <div className="flex items-center gap-8">
              <div className="relative">
                <Image src={"/placeholder.svg"} alt="Profile" width={120} height={120} className="rounded-full" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2014-0qg0RNVsoJMV2fe31FsBUJH9Yu1Uel.png"
                  alt="Avatar"
                  width={60}
                  height={60}
                  className="absolute -bottom-4 -right-4"
                />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-semibold">김명현(KIM Myeong Hyeon)</h3>
                <p className="opacity-80">2000.09.15</p>
                <p className="mt-2">Backend - Developer</p>
                <p className="opacity-80">대전 거주</p>
                <p className="opacity-80">010.8915.2670</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-emerald-600/20 rounded-2xl p-8 mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">SKILL</h2>
            <div className="grid gap-8">
              {[
                { category: "Language", items: ["Python"] },
                { category: "Framework", items: ["Django", "FastAPI"] },
                { category: "Database", items: ["MySQL", "PostgreSQL"] },
                { category: "Distribution", items: ["AWS", "NCP", "Docker"] },
                { category: "API", items: ["Swagger", "Ninja", "Postman"] },
              ].map((skill) => (
                <div key={skill.category}>
                  <div className="bg-emerald-800/30 text-white px-4 py-2 rounded-lg w-fit mb-3">{skill.category}</div>
                  <div className="flex gap-3 flex-wrap">
                    {skill.items.map((item) => (
                      <span key={item} className="bg-emerald-400/30 text-white px-4 py-2 rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-emerald-600/20 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-white mb-8">PROJECT</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg"
                      alt="Project thumbnail"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-emerald-700 w-6 h-6 rounded-full flex items-center justify-center">
                        <Image src="/placeholder.svg" alt="Clover icon" width={12} height={12} />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold">Actor Project</h3>
                </div>
              ))}
            </div>
            <div className="grid gap-8">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>완성도</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-4" />
              </div>
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>완성도</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

