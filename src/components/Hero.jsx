import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import BrandMark from './BrandMark.jsx'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="hero section-light" id="home">
      <div className="hero-glow" />
      <div className="hero-grain" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal className="eyebrow"><span className="eyebrow-dot" /> social media agency <span className="eyebrow-line" /></Reveal>
          <Reveal delay={0.08}>
            <h1>Yessss, we do<br />the <em>social</em> stuff<span className="headline-period">.</span></h1>
          </Reveal>
          <Reveal delay={0.16}><p className="hero-subline">yeah, that's <em>kinda</em> our thing.</p></Reveal>
          <Reveal delay={0.22}>
            <p className="hero-description">From content and strategy to shoots, stories, ads and everything social. We turn big ideas into content people actually want to see.</p>
          </Reveal>
          <Reveal delay={0.3} className="hero-actions">
            <a className="button" href="#contact">let's SOCIALIFY your brand <ArrowUpRight size={17} /></a>
            <a className="button button--outline" href="#services">see what we do <ArrowDownRight size={17} /></a>
          </Reveal>
          <Reveal delay={0.38} className="hero-footnote">
            <span className="avatar-stack"><i>S</i><i>✳</i><i>+</i></span>
            <span>big ideas look good on you.</span>
          </Reveal>
        </div>
        <div className="hero-art" aria-label="Socialify brand moodboard">
          <motion.div className="hero-orbit orbit-one" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 46, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="hero-orbit orbit-two" animate={reduceMotion ? {} : { rotate: -360 }} transition={{ duration: 62, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="hero-main-card" initial={{ opacity: 0, scale: .92, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .2, ease: [0.22, 1, .36, 1] }}>
            <div className="hero-card-top"><span>THE SOCIAL STUDIO</span><Sparkles size={16} /></div>
            <div className="hero-card-center">
              <div className="hero-card-mark"><BrandMark compact /></div>
              <p>your growth.<br /><em>our strategy.</em></p>
            </div>
            <div className="hero-card-bottom"><span>EST. FOR BIG IDEAS</span><span>✳ 01 / 04</span></div>
          </motion.div>
          <motion.div className="polaroid polaroid--one" animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [-5, -3, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=520&q=85" alt="Warm neutral fashion and lifestyle moodboard" />
            <span>the moodboard ✳</span>
          </motion.div>
          <motion.div className="polaroid polaroid--two" animate={reduceMotion ? {} : { y: [0, 8, 0], rotate: [4, 6, 4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=520&q=85" alt="Creative desk setup with notebook and warm natural light" />
            <span>good things grow</span>
          </motion.div>
          <motion.div className="hero-sticker" animate={reduceMotion ? {} : { rotate: [7, 12, 7] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <span>YOUR GROWTH</span><strong>✳</strong><span>OUR STRATEGY</span>
          </motion.div>
          <div className="hero-sparkle sparkle-a">✳</div><div className="hero-sparkle sparkle-b">✧</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>SCROLL A LITTLE</span><span className="scroll-line" /><span>GOOD CONTENT. BETTER DAYS.</span></div>
    </section>
  )
}