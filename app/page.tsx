import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurWork from './components/OurWork';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
    </>
  );
}
