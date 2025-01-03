import Image from 'next/image';
import Link from 'next/link';
import { 
  FaReact, 
  FaNode, 
  FaPython,
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
} from 'react-icons/si';

export default function Hero() {
  const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
    { name: "React", icon: FaReact, color: "hover:text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
    { name: "Node.js", icon: FaNode, color: "hover:text-[#339933]" },
    { name: "Python", icon: FaPython, color: "hover:text-[#3776AB]" },
    { name: "PHP", icon: FaPhp, color: "hover:text-[#777BB4]" },
    { name: "WordPress", icon: FaWordpress, color: "hover:text-[#21759B]" },
    { name: "Shopify", icon: FaShopify, color: "hover:text-[#7AB55C]" },
    { name: "Figma", icon: SiFigma, color: "hover:text-[#F24E1E]" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "hover:text-[#31A8FF]" },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-blue-500">Bradley Lewis</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              A Full Stack Developer passionate about building web applications that make a difference.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View Projects
                </button>
                <button className="px-6 py-3 bg-white text-black border border-foreground/20 rounded-lg hover:bg-foreground/5 transition">
                  Contact Me
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 transition-all duration-300"
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
                src="/profile.jpg"
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