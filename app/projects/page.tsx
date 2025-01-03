import React from 'react';
import Navbar from '../components/Navbar';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Tailwind"],
      image: "/project1.jpg",
      link: "https://project1.com",
      github: "https://github.com/username/project1"
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition"
              >
                <div className="aspect-video relative bg-foreground/5 rounded-md mb-4">
                  {/* Add project image here */}
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">{project.title}</h2>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-foreground/5 rounded-md text-sm text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 