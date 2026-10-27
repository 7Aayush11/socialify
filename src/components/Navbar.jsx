import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import { navLinks } from '../data/content.js'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="nav-inner container">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <a className="button button--small nav-cta" href="#contact">let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-menu" aria-label="Mobile navigation"
            initial={{ clipPath: 'inset(0 0 100% 0 round 0 0 24px 24px)' }}
            animate={{ clipPath: 'inset(0 0 0% 0 round 0 0 24px 24px)' }}
            exit={{ clipPath: 'inset(0 0 100% 0 round 0 0 24px 24px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <BrandMark light />
            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <motion.a key={link.href} href={link.href} onClick={closeMenu}
                  initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.07 }}>
                  <span>0{index + 1}</span>{link.label}
                </motion.a>
              ))}
            </div>
            <p>Good Content. Better Days.</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}