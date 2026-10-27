import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import BrandMark from './BrandMark.jsx'

export default function CtaBanner() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="cta-banner section-dark">
      <div className="cta-glow" />
      <div className="cta-ring cta-ring--one" /><div className="cta-ring cta-ring--two" />
      <div className="container cta-inner">
        <Reveal className="cta-mark"><BrandMark compact light /></Reveal>
        <Reveal delay={.08}><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</p></Reveal>
        <Reveal delay={.14}><h2>let's <em>SOCIALIFY</em><br />your brand!</h2></Reveal>
        <Reveal delay={.22}><p className="cta-subtext">Big ideas, good vibes, and a little something to say? We're listening.</p></Reveal>
        <Reveal delay={.3}><a href="#contact" className="button button--ivory">start the conversation <ArrowUpRight size={17} /></a></Reveal>
        <motion.span className="cta-star" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}>✳</motion.span>
      </div>
    </section>
  )
}