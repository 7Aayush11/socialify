import { ArrowUpRight, Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const highlights = ['Creators of Brand Growth', 'Strategy-first', 'Content people want to see']

export default function About() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="about section-dark section-pad" id="about">
      <div className="sparkle-field" aria-hidden="true"><span>✳</span><span>✧</span><span>✳</span><span>·</span><span>✧</span></div>
      <div className="container about-grid">
        <div className="about-visual">
          <Reveal className="about-image-frame">
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=85" alt="Creative studio table with art materials and warm natural colors" loading="lazy" />
            <div className="image-label"><span>MADE WITH INTENTION</span><span>✳</span></div>
          </Reveal>
          <motion.div className="about-stamp" animate={reduceMotion ? {} : { rotate: [10, 0, 10] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}>A LITTLE<br /><em>more</em><br />SOCIAL</motion.div>
        </div>
        <div className="about-copy">
          <Reveal className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> we're socialify</Reveal>
          <Reveal delay={.08}><h2>Good ideas deserve<br /><em>good company.</em></h2></Reveal>
          <Reveal delay={.15}><p>Just a team for brands with big ideas, good vibes, and a little something to say.</p><p>we turn those ideas into content people actually want to see.</p></Reveal>
          <Reveal delay={.22} className="highlight-list">
            {highlights.map(item => <span key={item}><Check size={15} />{item}</span>)}
          </Reveal>
          <Reveal delay={.28}><a className="text-link text-link--light" href="#contact">let's SOCIALIFY your brand! <ArrowUpRight size={16} /></a></Reveal>
        </div>
      </div>
    </section>
  )
}