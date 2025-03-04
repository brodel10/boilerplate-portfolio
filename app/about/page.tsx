import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Celine header image"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Get to know the stylist behind the chair
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Celine professional headshot"
                width={600}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">Hello, I'm Celine</h2>
              <p className="text-lg text-gray-600">
                With over 8 years of experience in the hair industry, I've dedicated my career to helping clients look
                and feel their best through personalized hair services.
              </p>
              <p className="text-lg text-gray-600">
                My journey began at the prestigious Paris Beauty Academy, where I developed a strong foundation in
                cutting-edge techniques and classic styling. After graduating with honors, I spent three years working
                alongside some of the industry's top stylists at renowned salons in New York and Los Angeles.
              </p>
              <p className="text-lg text-gray-600">
                I specialize in creating personalized styles that enhance your natural beauty and reflect your
                personality. Whether you're looking for a subtle change or a complete transformation, I'm dedicated to
                providing you with a look that makes you feel confident and beautiful.
              </p>
              <p className="text-lg text-gray-600">
                My approach combines technical precision with artistic vision, ensuring that each client receives a
                customized experience tailored to their unique features, lifestyle, and preferences.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-rose-400 hover:bg-rose-500 text-white">
                  <Link href="/contact">Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Education & Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Education</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Paris Beauty Academy</h4>
                  <p className="text-gray-600">Advanced Hair Styling & Coloring Certification</p>
                  <p className="text-gray-500 text-sm">2015 - 2017</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">L'Oréal Professional</h4>
                  <p className="text-gray-600">Color Specialist Certification</p>
                  <p className="text-gray-500 text-sm">2018</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Wella Professional</h4>
                  <p className="text-gray-600">Advanced Color Techniques</p>
                  <p className="text-gray-500 text-sm">2019</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Bridal Hair Masterclass</h4>
                  <p className="text-gray-600">Specialized Bridal Styling Certification</p>
                  <p className="text-gray-500 text-sm">2020</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Experience</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Celine's Hair Studio</h4>
                  <p className="text-gray-600">Owner & Lead Stylist</p>
                  <p className="text-gray-500 text-sm">2021 - Present</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Luxe Salon, Los Angeles</h4>
                  <p className="text-gray-600">Senior Stylist</p>
                  <p className="text-gray-500 text-sm">2019 - 2021</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Vogue Hair, New York</h4>
                  <p className="text-gray-600">Color Specialist</p>
                  <p className="text-gray-500 text-sm">2017 - 2019</p>
                </li>
                <li className="border-l-4 border-rose-300 pl-4">
                  <h4 className="font-bold text-lg">Fashion Week</h4>
                  <p className="text-gray-600">Freelance Stylist</p>
                  <p className="text-gray-500 text-sm">2018, 2019, 2022</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-8">My Philosophy</h2>
          <div className="bg-rose-50 p-8 md:p-12 rounded-lg shadow-md">
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif">
              "I believe that great hair isn't just about following trends—it's about creating a style that enhances
              your natural beauty and fits seamlessly into your lifestyle. Every client deserves personalized attention
              and a look that makes them feel confident and beautiful."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and let's create something beautiful together.
          </p>
          <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500 text-white">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

