import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Showcase from './components/Showcase.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && <div className="menu-scrim" onClick={() => setMenuOpen(false)} />}
      </AnimatePresence>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Showcase />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}