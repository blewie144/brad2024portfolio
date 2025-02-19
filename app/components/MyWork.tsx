"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaGithub, 
  FaReact, 
  FaNode, 
  FaJs,
  FaShopify,
  FaHtml5,
} from 'react-icons/fa6';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiFastapi,
} from 'react-icons/si';
import { motion } from "framer-motion";
import AnimatedHeader from "./AnimatedHeader";

const techIcons: { [key: string]: { icon: React.ElementType, color: string, bgColor: string } } = {
  'Next.js': { 
    icon: SiNextdotjs, 
    color: "hover:text-white",
    bgColor: "bg-black/10 text-white hover:bg-black/20"
  },
  'React': { 
    icon: FaReact, 
    color: "hover:text-[#61DAFB]",
    bgColor: "bg-[#61DAFB]/10 text-[#61DAFB] hover:bg-[#61DAFB]/20"
  },
  'TypeScript': { 
    icon: SiTypescript, 
    color: "hover:text-[#3178C6]",
    bgColor: "bg-[#3178C6]/10 text-[#3178C6] hover:bg-[#3178C6]/20"
  },
  'Tailwind CSS': { 
    icon: SiTailwindcss, 
    color: "hover:text-[#06B6D4]",
    bgColor: "bg-[#06B6D4]/10 text-[#06B6D4] hover:bg-[#06B6D4]/20"
  },
  'Node.js': { 
    icon: FaNode, 
    color: "hover:text-[#339933]",
    bgColor: "bg-[#339933]/10 text-[#339933] hover:bg-[#339933]/20"
  },
  'Prisma': { 
    icon: SiPrisma, 
    color: "hover:text-white",
    bgColor: "bg-white/10 text-white hover:bg-white/20"
  },
  'MongoDB': { 
    icon: SiMongodb, 
    color: "hover:text-[#47A248]",
    bgColor: "bg-[#47A248]/10 text-[#47A248] hover:bg-[#47A248]/20"
  },
  'Express': { 
    icon: SiExpress, 
    color: "hover:text-white",
    bgColor: "bg-white/10 text-white hover:bg-white/20"
  },
  'TensorFlow': { 
    icon: SiTensorflow, 
    color: "hover:text-[#FF6F00]",
    bgColor: "bg-[#FF6F00]/10 text-[#FF6F00] hover:bg-[#FF6F00]/20"
  },
  'FastAPI': { 
    icon: SiFastapi, 
    color: "hover:text-[#009688]",
    bgColor: "bg-[#009688]/10 text-[#009688] hover:bg-[#009688]/20"
  },
  'JavaScript': { 
    icon: FaJs, 
    color: "hover:text-[#F7DF1E]",
    bgColor: "bg-[#F7DF1E]/10 text-[#F7DF1E] hover:bg-[#F7DF1E]/20"
  },
  'Shopify': { 
    icon: FaShopify, 
    color: "hover:text-[#95BF47]",
    bgColor: "bg-[#95BF47]/10 text-[#95BF47] hover:bg-[#95BF47]/20"
  },
  'HTML': { 
    icon: FaHtml5, 
    color: "hover:text-[#E34F26]",
    bgColor: "bg-[#E34F26]/10 text-[#E34F26] hover:bg-[#E34F26]/20"
  },
};

export default function MyWork() {
  const projects = [
    {
      title: "Herbs of Gold",
      description: "A Custom Shopify theme built for a client who sells herbs and essential oils.",
      technologies: ["Shopify", "JavaScript", "HTML"],
      image: "/pictures/herbsofgold.png",
      github: "",
    },
    // {
    //   title: "Shopify App Placeholder",
    //   description: "Collaborative project management tool with real-time updates",
    //   technologies: ["React", "Node.js", "MongoDB", "Express"],
    //   image: "https://placehold.co/600x400/1a1a1a/666666",
    //   github: "https://github.com/yourusername/project2",
    // },
    {
      title: "Femme Organic",
      description: "A Custom Shopify theme built for a client who sells organic feminine hygiene products.",
      technologies: ["Shopify", "JavaScript", "HTML"],
      image: "/pictures/femme.png",
      github: "",
    },
    {
      title: "React Weather API",
      description: "A weather app built with React and TypeScript. Communicates with the OpenWeather API to fetch weather data.",
      technologies: ["React", "TypeScript"],
      image: "/pictures/weather.png",
      github: "https://github.com/blewie144/reactweatherapp",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedHeader 
          title="My Work"
          subtitle="Explore some of my recent projects that showcase my expertise in web development and design."
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-background border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition group hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="aspect-video relative bg-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  {project.github && project.github !== "" && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                </div>
                <p className="text-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => {
                    const TechIcon = techIcons[tech]?.icon;
                    return TechIcon ? (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${techIcons[tech].bgColor}`}
                      >
                        <TechIcon className={`w-5 h-5 transition-colors duration-300 ${techIcons[tech].color}`} />
                        {tech}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 