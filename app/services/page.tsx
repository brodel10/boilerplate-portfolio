import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "haircuts",
    title: "Haircuts & Styling",
    description: "Precision cuts and styling tailored to enhance your features and lifestyle.",
    image: "/placeholder.svg?height=600&width=800",
    items: [
      { name: "Women's Haircut & Style", price: "$65+" },
      { name: "Men's Haircut & Style", price: "$45+" },
      { name: "Children's Haircut (12 & under)", price: "$35+" },
      { name: "Bang Trim", price: "$15+" },
      { name: "Blowout & Style", price: "$45+" },
      { name: "Special Occasion Style", price: "$85+" },
    ],
  },
  {
    id: "color",
    title: "Color & Highlights",
    description: "Vibrant, dimensional color that brings your hair to life and enhances your complexion.",
    image: "/placeholder.svg?height=600&width=800",
    items: [
      { name: "Single Process Color", price: "$75+" },
      { name: "Partial Highlights", price: "$95+" },
      { name: "Full Highlights", price: "$135+" },
      { name: "Balayage", price: "$150+" },
      { name: "Ombré", price: "$160+" },
      { name: "Color Correction", price: "Consultation Required" },
    ],
  },
  {
    id: "treatments",
    title: "Hair Treatments",
    description: "Nourishing treatments to restore and maintain the health and vitality of your hair.",
    image: "/placeholder.svg?height=600&width=800",
    items: [
      { name: "Deep Conditioning Treatment", price: "$25+" },
      { name: "Keratin Smoothing Treatment", price: "$250+" },
      { name: "Scalp Treatment", price: "$45+" },
      { name: "Olaplex Treatment", price: "$35+" },
      { name: "Hair Mask", price: "$30+" },
      { name: "Split End Treatment", price: "$40+" },
    ],
  },
  {
    id: "bridal",
    title: "Bridal Services",
    description: "Comprehensive bridal hair services to make your special day perfect.",
    image: "/placeholder.svg?height=600&width=800",
    items: [
      { name: "Bridal Hair Trial", price: "$85+" },
      { name: "Bridal Hair Day-Of", price: "$150+" },
      { name: "Bridesmaid Hair", price: "$85+" },
      { name: "Flower Girl Hair (10 & under)", price: "$45+" },
      { name: "Mother of Bride/Groom", price: "$75+" },
      { name: "On-Location Fee", price: "Varies by Distance" },
    ],
  },
  {
    id: "extensions",
    title: "Extensions",
    description: "Premium hair extensions for added length, volume, or both.",
    image: "/placeholder.svg?height=600&width=800",
    items: [
      { name: "Extension Consultation", price: "Complimentary" },
      { name: "Tape-In Extensions (Full)", price: "$450+" },
      { name: "Tape-In Extensions (Partial)", price: "$250+" },
      { name: "Hand-Tied Extensions", price: "$800+" },
      { name: "Extension Maintenance", price: "$75+" },
      { name: "Extension Removal", price: "$75+" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Services header image"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Services & Pricing</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Professional hair services tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center scroll-mt-20`}
              >
                <div className="lg:w-1/2">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">{service.title}</h2>
                  <p className="text-lg text-gray-600">{service.description}</p>
                  <div className="bg-rose-50 rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Pricing</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-center border-b border-rose-100 pb-2">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-rose-500 font-bold">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mt-4">
                      * Prices may vary based on hair length, thickness, and complexity
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Salon Policies</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Appointment Policies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Please arrive 5-10 minutes before your scheduled appointment time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>A credit card is required to hold all appointments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>24-hour notice is required for all cancellations to avoid a 50% service fee.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>No-shows will be charged the full service amount.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">General Policies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Consultations are included in all services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>We accept all major credit cards, cash, and mobile payments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Gratuity is not included in service prices and is greatly appreciated.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Children must be supervised at all times.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule your service or consultation.
          </p>
          <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500 text-white">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

