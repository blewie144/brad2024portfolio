"use client";

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        message: 'Message sent successfully!',
        isError: false,
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-unused-vars
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="space-y-8">
            <p className="text-white/80 text-center text-lg">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="flex justify-center gap-8 pt-8 border-t border-foreground/10">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 