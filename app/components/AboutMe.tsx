import React from 'react';

export default function AboutMe() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-white/80 text-center">
            <p className="text-lg">
              I'm a Full Stack Developer specializing in Shopify development and custom e-commerce solutions. With extensive experience working with agencies, I've helped numerous businesses scale their online presence through custom Shopify themes and applications.
            </p>
            
            <p className="text-lg">
              My journey began with Developing Wordpress themes and then moved to specializing in Shopify theme development, which evolved into creating custom applications and integrations. I've worked with leading agencies to deliver tailored e-commerce solutions that combine powerful functionality with exceptional user experiences.
            </p>
            
            <p className="text-lg">
              Today, I leverage modern technologies like Next.js, React, and Node.js alongside Shopify's and the wordpress ecosystem to build scalable e-commerce solutions. My expertise spans from custom theme development to complex app integrations, helping businesses achieve their online retail goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 border border-foreground/10 rounded-xl hover:border-foreground/20 transition">
                <h3 className="text-xl font-bold text-white mb-2">Shopify Development</h3>
                <p className="text-white/70">
                  Building custom themes and apps that deliver unique shopping experiences.
                </p>
              </div>
              
              <div className="p-6 border border-foreground/10 rounded-xl hover:border-foreground/20 transition">
                <h3 className="text-xl font-bold text-white mb-2">Agency Experience</h3>
                <p className="text-white/70">
                  Collaborating with agencies to create tailored e-commerce solutions.
                </p>
              </div>
              
              <div className="p-6 border border-foreground/10 rounded-xl hover:border-foreground/20 transition">
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Integration</h3>
                <p className="text-white/70">
                  Connecting e-commerce platforms with modern web technologies.
                </p>
              </div>

            </div>

            <div className="mt-12 border-foreground/10 pt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="inline-block text-left">
                <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                  <h4 className="text-xl font-bold text-white mb-2">Certificate IV in Web Based Technologies</h4>
                  <div className="flex flex-col gap-1">
                    <p className="text-white/70">TAFE SA</p>
                    <p className="text-white/70 text-sm">2019 - 2020</p>
                  </div>
                  <p className="text-white/70 mt-3">Comprehensive training in web development fundamentals, including front-end technologies, backend development, and web design principles.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 