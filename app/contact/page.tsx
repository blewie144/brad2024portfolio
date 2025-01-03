import React from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Get in Touch</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Other Ways to Connect</h2>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-foreground hover:text-blue-500 transition"
              >
                <span className="mr-2">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-foreground hover:text-blue-500 transition"
              >
                <span className="mr-2">LinkedIn</span>
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center text-foreground hover:text-blue-500 transition"
              >
                <span className="mr-2">your.email@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 