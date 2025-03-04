"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Celine is amazing! She transformed my dull hair into a vibrant, dimensional color that I absolutely love. Her attention to detail and ability to understand exactly what I wanted was impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    text: "I've been going to Celine for over a year now and I won't trust anyone else with my hair. She's incredibly skilled, listens to what you want, and always delivers beautiful results.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    text: "Celine did my hair for my wedding and I couldn't have been happier! She created exactly the look I wanted and it stayed perfect all day and night. Highly recommend her for special occasions!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michelle Thompson",
    text: "I was nervous about trying a new hairstylist, but Celine immediately put me at ease. She took the time to understand my hair concerns and gave me the best haircut I've ever had.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying]) // Removed nextTestimonial from dependencies

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="relative max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full p-6 bg-rose-50 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-center italic mb-4">"{testimonial.text}"</blockquote>
              <p className="text-center font-medium text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-rose-500 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-rose-500 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-rose-500" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

