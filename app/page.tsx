import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
}
