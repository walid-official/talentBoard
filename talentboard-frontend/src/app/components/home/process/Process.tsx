"use client"

import { CheckCircle, FileText, Search, UserPlus } from "lucide-react"

export const Process = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side with heading and benefits */}
          <div className="lg:w-1/3">
            <div className="sticky top-20">
              <p className="text-amber-500 font-medium mb-2">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 leading-tight">
                Follow our steps we will help you.
              </h2>

              <div className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-amber-100 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side with steps */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className={`rounded-2xl p-6 relative overflow-hidden ${step.bgColor} shadow-lg`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="font-medium">{step.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 relative z-10">{step.description}</p>

                <div className="absolute top-4 right-4 text-8xl font-bold opacity-20">{step.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const benefits = ["Post a Role", "Build Your Team", "Start Collaborating", "Track Results"]

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-blue-500" />,
    title: "Post ",
    subtitle: "A Role",
    description: "Define your project needs and describe the ideal freelance talent.",
    number: "01",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Search className="w-6 h-6 text-amber-500" />,
    title: "Build",
    subtitle: "Your Team",
    description: " Choose from a pool of pre-vetted experts and form your perfect team.",
    number: "02",
    bgColor: "bg-amber-100",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    title: "Start",
    subtitle: "Collaborating",
    description: " Assign tasks, track progress, and stay aligned with built-in tools.",
    number: "03",
    bgColor: "bg-purple-100",
  },
  {
    icon: <FileText className="w-6 h-6 text-emerald-500" />,
    title: "Track",
    subtitle: "Results",
    description: "Monitor performance, manage outcomes, and optimize future projects.",
    number: "04",
    bgColor: "bg-emerald-100",
  },
]
