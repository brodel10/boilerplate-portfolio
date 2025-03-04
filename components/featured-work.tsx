"use client"

import { useState } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All" },
  { id: "cuts", name: "Cuts" },
  { id: "color", name: "Color" },
  { id: "styling", name: "Styling" },
  { id: "bridal", name: "Bridal" },
]

const featuredWork = [
  {
    id: 1,
    title: "Balayage Transformation",
    description: "Natural-looking, sun-kissed highlights",
    image: "/placeholder.svg?height=600&width=400",
    category: "color",
  },
  {
    id: 2,
    title: "Modern Bob Cut",
    description: "Sleek, angled bob with textured ends",
    image: "/placeholder.svg?height=600&width=400",
    category: "cuts",
  },
  {
    id: 3,
    title: "Romantic Updo",
    description: "Elegant updo with loose curls for a wedding",
    image: "/placeholder.svg?height=600&width=400",
    category: "bridal",
  },
  {
    id: 4,
    title: "Vibrant Red",
    description: "Bold, vibrant red color transformation",
    image: "/placeholder.svg?height=600&width=400",
    category: "color",
  },
  {
    id: 5,
    title: "Beach Waves",
    description: "Effortless, textured beach waves",
    image: "/placeholder.svg?height=600&width=400",
    category: "styling",
  },
  {
    id: 6,
    title: "Layered Cut",
    description: "Long layers with face-framing pieces",
    image: "/placeholder.svg?height=600&width=400",
    category: "cuts",
  },
]

export default function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredWork =
    selectedCategory === "all" ? featuredWork : featuredWork.filter((item) => item.category === selectedCategory)

  return (
    <div className="space-y-8">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-rose-100 p-1 max-w-md mx-auto">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                cn(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow text-rose-500"
                    : "text-gray-700 hover:bg-white/[0.12] hover:text-rose-500",
                )
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWork.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/90 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

