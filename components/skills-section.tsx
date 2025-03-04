import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nextjs,
  Typescript,
  Tailwind,
  Figma,
  Git,
  Nodejs,
  Graphql,
  Firebase,
} from "@/components/tech-icons"

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <Html5 className="h-8 w-8" /> },
        { name: "CSS3", icon: <Css3 className="h-8 w-8" /> },
        { name: "JavaScript", icon: <Javascript className="h-8 w-8" /> },
        { name: "TypeScript", icon: <Typescript className="h-8 w-8" /> },
        { name: "React", icon: <ReactLogo className="h-8 w-8" /> },
        { name: "Next.js", icon: <Nextjs className="h-8 w-8" /> },
        { name: "Tailwind CSS", icon: <Tailwind className="h-8 w-8" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <Nodejs className="h-8 w-8" /> },
        { name: "GraphQL", icon: <Graphql className="h-8 w-8" /> },
        { name: "Firebase", icon: <Firebase className="h-8 w-8" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <Git className="h-8 w-8" /> },
        { name: "Figma", icon: <Figma className="h-8 w-8" /> },
      ],
    },
  ]

  return (
    <div className="space-y-10">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category}>
          <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillGroup.items.map((skill) => (
              <div
                key={skill.name}
                className="skill-card flex flex-col items-center justify-center p-6 bg-card rounded-lg border shadow-sm"
              >
                {skill.icon}
                <span className="mt-2 text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

