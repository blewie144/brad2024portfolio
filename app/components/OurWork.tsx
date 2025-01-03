import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaReact, 
  FaNode, 
  FaPython,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiPrisma, 
  SiMongodb, 
  SiExpress, 
  SiTensorflow, 
  SiFastapi, 
  SiNextdotjs 
} from 'react-icons/si';

// Create a mapping of technology names to their icons
const techIcons: { [key: string]: React.ElementType } = {
  'React': FaReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Prisma': SiPrisma,
  'Node.js': FaNode,
  'MongoDB': SiMongodb,
  'Express': SiExpress,
  'Python': FaPython,
  'TensorFlow': SiTensorflow,
  'FastAPI': SiFastapi,
};

export default function OurWork() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory and payment processing",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered platform for generating marketing content and social media posts",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tour capabilities",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform for multiple social media accounts",
      technologies: ["React", "Node.js", "Express", "TypeScript"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and medical records",
      technologies: ["Next.js", "Prisma", "TypeScript", "MongoDB"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation and student progress tracking",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial data visualization and analysis platform",
      technologies: ["Next.js", "TypeScript", "Prisma", "FastAPI"],
      image: "https://placehold.co/600x400/1a1a1a/666666",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent projects that showcase my expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-background border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/20 transition"
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
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => {
                    const IconComponent = techIcons[tech];
                    return (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm flex items-center gap-2"
                      >
                        {IconComponent && <IconComponent className="w-5 h-5" />}
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