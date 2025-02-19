import Image from 'next/image';
import { 
  FaReact, 
  FaNode, 
  FaPhp,
  FaWordpress,
  FaShopify,
} from 'react-icons/fa6';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs,
  SiFigma,
  SiAdobephotoshop,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';

export default function Hero() {
  const technologies = [
    { 
      name: "Next.js", 
      icon: SiNextdotjs, 
      color: "hover:text-white",
      bgColor: "bg-black/10 text-white hover:bg-black/20"
    },
    { 
      name: "React", 
      icon: FaReact, 
      color: "hover:text-[#61DAFB]",
      bgColor: "bg-[#61DAFB]/10 text-[#61DAFB] hover:bg-[#61DAFB]/20"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript, 
      color: "hover:text-[#3178C6]",
      bgColor: "bg-[#3178C6]/10 text-[#3178C6] hover:bg-[#3178C6]/20"
    },
    { 
      name: "Tailwind CSS", 
      icon: SiTailwindcss, 
      color: "hover:text-[#06B6D4]",
      bgColor: "bg-[#06B6D4]/10 text-[#06B6D4] hover:bg-[#06B6D4]/20"
    },
    { 
      name: "Node.js", 
      icon: FaNode, 
      color: "hover:text-[#339933]",
      bgColor: "bg-[#339933]/10 text-[#339933] hover:bg-[#339933]/20"
    },
    { 
      name: "PHP", 
      icon: FaPhp, 
      color: "hover:text-[#777BB4]",
      bgColor: "bg-[#777BB4]/10 text-[#777BB4] hover:bg-[#777BB4]/20"
    },
    { 
      name: "WordPress", 
      icon: FaWordpress, 
      color: "hover:text-[#21759B]",
      bgColor: "bg-[#21759B]/10 text-[#21759B] hover:bg-[#21759B]/20"
    },
    { 
      name: "Shopify", 
      icon: FaShopify, 
      color: "hover:text-[#7AB55C]",
      bgColor: "bg-[#7AB55C]/10 text-[#7AB55C] hover:bg-[#7AB55C]/20"
    },
    { 
      name: "Figma", 
      icon: SiFigma, 
      color: "hover:text-[#F24E1E]",
      bgColor: "bg-[#F24E1E]/10 text-[#F24E1E] hover:bg-[#F24E1E]/20"
    },
    { 
      name: "Photoshop", 
      icon: SiAdobephotoshop, 
      color: "hover:text-[#31A8FF]",
      bgColor: "bg-[#31A8FF]/10 text-[#31A8FF] hover:bg-[#31A8FF]/20"
    },
    { 
      name: "MySQL", 
      icon: SiMysql, 
      color: "hover:text-[#4479A1]",
      bgColor: "bg-[#4479A1]/10 text-[#4479A1] hover:bg-[#4479A1]/20"
    },
    { 
      name: "PostgreSQL", 
      icon: SiPostgresql, 
      color: "hover:text-[#336791]",
      bgColor: "bg-[#336791]/10 text-[#336791] hover:bg-[#336791]/20"
    },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background pt-10 md:pt-32">
      <div className="container mx-auto px-4 py-4 md:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I&apos;m <span className="text-blue-500">Bradley Lewis</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              A Full Stack Developer passionate about building web applications that make a difference. Based in Adelaide, Australia.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <a 
                  href="#mywork" 
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white text-black border border-foreground/20 rounded-lg hover:bg-foreground/5 transition"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${tech.bgColor}`}
                  >
                    <tech.icon className={`w-5 h-5 transition-colors duration-300 ${tech.color}`} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 absolute -z-10 blur-3xl"></div>
            <div className="w-[400px] h-[400px] relative">
              <Image
                src="/pictures/profile.JPG"
                alt="Profile picture"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '50rem' }}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 