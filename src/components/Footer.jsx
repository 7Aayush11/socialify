import { ArrowUp, ArrowUpRight, Instagram } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import { navLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand"><BrandMark light /><p>Your Growth. Our Strategy.</p><span>we do the social stuff.</span></div>
          <div className="footer-nav"><span className="footer-label">TAKE A LOOK AROUND</span><div>{navLinks.map(link => <a key={link.href} href={link.href}>{link.label}<ArrowUpRight size={13} /></a>)}</div></div>
          <div className="footer-social"><span className="footer-label">LET'S BE SOCIAL</span><a href="#contact" aria-label="Instagram link placeholder"><Instagram size={17} /> Instagram <ArrowUpRight size={13} /></a><p>good content starts with a conversation.</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SOCIALIFY. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP <ArrowUp size={13} /></a></div>
      </div>
    </footer>
  )
}