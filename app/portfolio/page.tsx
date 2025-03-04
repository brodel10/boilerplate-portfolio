import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const portfolioCategories = [
  {
    id: "cuts",
    name: "Haircuts",
    items: [
      {
        id: 1,
        title: "Modern Bob",
        description: "Sleek, angled bob with textured ends",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 2,
        title: "Layered Cut",
        description: "Long layers with face-framing pieces",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 3,
        title: "Pixie Cut",
        description: "Edgy, textured pixie with long bangs",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 4,
        title: "Shag Haircut",
        description: "Modern shag with lots of movement and texture",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 5,
        title: "Blunt Lob",
        description: "Sleek, one-length long bob",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 6,
        title: "Curtain Bangs",
        description: "Soft, face-framing curtain bangs",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    id: "color",
    name: "Color",
    items: [
      {
        id: 1,
        title: "Balayage",
        description: "Natural-looking, sun-kissed highlights",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 2,
        title: "Vibrant Red",
        description: "Bold, vibrant red color transformation",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 3,
        title: "Platinum Blonde",
        description: "Icy, cool-toned platinum blonde",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 4,
        title: "Caramel Highlights",
        description: "Warm caramel highlights on brunette base",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 5,
        title: "Rose Gold",
        description: "Soft, feminine rose gold color",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 6,
        title: "Ombré",
        description: "Gradual color transition from dark to light",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    items: [
      {
        id: 1,
        title: "Beach Waves",
        description: "Effortless, textured beach waves",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 2,
        title: "Sleek Straight",
        description: "Ultra-smooth, glossy straight style",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 3,
        title: "Voluminous Blowout",
        description: "Full-bodied, bouncy blowout",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 4,
        title: "Textured Ponytail",
        description: "Elevated ponytail with texture and volume",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 5,
        title: "Half-Up Style",
        description: "Elegant half-up, half-down style",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 6,
        title: "Vintage Curls",
        description: "Classic, old Hollywood-inspired curls",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    id: "bridal",
    name: "Bridal",
    items: [
      {
        id: 1,
        title: "Romantic Updo",
        description: "Elegant updo with loose curls",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 2,
        title: "Braided Crown",
        description: "Intricate braided crown with fresh flowers",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 3,
        title: "Soft Waves",
        description: "Romantic, loose waves with side part",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 4,
        title: "Classic Chignon",
        description: "Timeless, low chignon with veil placement",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 5,
        title: "Boho Braid",
        description: "Relaxed, bohemian-inspired braid with accessories",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: 6,
        title: "Vintage Updo",
        description: "Retro-inspired updo with modern twist",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Portfolio header image"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            A showcase of my work and creative hair transformations
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cuts" className="space-y-8">
            <TabsList className="flex justify-center space-x-2 mb-8">
              {portfolioCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-rose-400 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {portfolioCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

