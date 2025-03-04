"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact header image"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 bg-rose-50 p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Thank You!</h3>
                  <p>
                    Your appointment request has been received. I'll get back to you shortly to confirm your booking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" required className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" required className="bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="haircut">Haircut & Style</SelectItem>
                        <SelectItem value="color">Color Service</SelectItem>
                        <SelectItem value="highlights">Highlights</SelectItem>
                        <SelectItem value="balayage">Balayage</SelectItem>
                        <SelectItem value="treatment">Hair Treatment</SelectItem>
                        <SelectItem value="bridal">Bridal Hair</SelectItem>
                        <SelectItem value="extensions">Extensions</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-white">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="bg-white"
                      placeholder="Tell me more about what you're looking for..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rose-400 hover:bg-rose-500 text-white"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Request Appointment"}
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-rose-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">
                        123 Hair Studio Lane, Suite 101
                        <br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-rose-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-rose-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">celine@hairstudio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-rose-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: 9:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Follow Me</h2>
                <div className="flex gap-6">
                  <a href="https://instagram.com" className="text-rose-400 hover:text-rose-500 transition-colors">
                    <Instagram size={32} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://facebook.com" className="text-rose-400 hover:text-rose-500 transition-colors">
                    <Facebook size={32} />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Location</h2>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Map location"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                How far in advance should I book my appointment?
              </h3>
              <p className="text-gray-600">
                I recommend booking 1-2 weeks in advance for regular services and 4-6 weeks for special occasions or
                extensive color services to ensure availability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                What happens if I need to cancel my appointment?
              </h3>
              <p className="text-gray-600">
                I require 24-hour notice for all cancellations to avoid a 50% service fee. Please call or email as soon
                as possible if you need to reschedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                Do you offer consultations before services?
              </h3>
              <p className="text-gray-600">
                Yes! Consultations are included with all services. For major color changes or transformations, I
                recommend scheduling a separate consultation appointment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">What forms of payment do you accept?</h3>
              <p className="text-gray-600">
                I accept all major credit cards, cash, and mobile payments like Venmo and CashApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

