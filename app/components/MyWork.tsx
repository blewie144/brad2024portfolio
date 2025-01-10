import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaGithub, 
  FaReact, 
  FaNode, 
  FaPython,
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

const techIcons: { [key: string]: { icon: React.ElementType, color: string } } = {
  'Next.js': { icon: SiNextdotjs, color: "hover:text-white" },
  'React': { icon: FaReact, color: "hover:text-[#61DAFB]" },
  'TypeScript': { icon: SiTypescript, color: "hover:text-[#3178C6]" },
  'Tailwind CSS': { icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  'Node.js': { icon: FaNode, color: "hover:text-[#339933]" },
  'Python': { icon: FaPython, color: "hover:text-[#3776AB]" },
  'Prisma': { icon: SiPrisma, color: "hover:text-white" },
  'MongoDB': { icon: SiMongodb, color: "hover:text-[#47A248]" },
  'Express': { icon: SiExpress, color: "hover:text-white" },
  'TensorFlow': { icon: SiTensorflow, color: "hover:text-[#FF6F00]" },
  'FastAPI': { icon: SiFastapi, color: "hover:text-[#009688]" },
};

export default function OurWork() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory and payment processing",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project2",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered platform for generating marketing content and social media posts",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tour capabilities",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project4",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform for multiple social media accounts",
      technologies: ["React", "Node.js", "Express", "TypeScript"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project5",
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and medical records",
      technologies: ["Next.js", "Prisma", "TypeScript", "MongoDB"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project6",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation and student progress tracking",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project7",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial data visualization and analysis platform",
      technologies: ["Next.js", "TypeScript", "Prisma", "FastAPI"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
      github: "https://github.com/yourusername/project8",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition group"
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
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => {
                    const TechIcon = techIcons[tech]?.icon;
                    return (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {TechIcon && (
                          <TechIcon 
                            className={`w-5 h-5 transition-colors duration-300 ${techIcons[tech].color}`} 
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 