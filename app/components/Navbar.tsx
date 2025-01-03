import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-foreground/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end items-center h-16">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/70 hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="text-white/70 hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 