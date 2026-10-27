import { ArrowUpRight } from 'lucide-react'
import { reasons } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function WhyUs() {
  return (
    <section className="why section-pad section-sand">
      <div className="container why-grid">
        <div className="why-copy">
          <Reveal className="eyebrow"><span className="eyebrow-dot" /> why socialify</Reveal>
          <Reveal delay={.08}><h2>you keep your brand busy, we'll keep the <em>SOCIALS</em> busy!</h2></Reveal>
          <Reveal delay={.16}><p className="why-intro">Your brand has a point of view. We help the right people see it, feel it, and remember it.</p></Reveal>
          <Reveal delay={.22}><a href="#contact" className="button">let's talk about your brand <ArrowUpRight size={16} /></a></Reveal>
          <Reveal delay={.28} className="why-visual">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85" alt="Bright creative workspace with a warm, natural palette" loading="lazy" />
            <span className="why-image-note">GOOD WORK, GOOD ENERGY ✳</span>
          </Reveal>
        </div>
        <div className="reasons-list">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return <Reveal key={reason.title} delay={index * .08} className="reason-row">
              <div className="reason-icon"><Icon size={22} strokeWidth={1.5} /></div>
              <div><span className="reason-index">0{index + 1} / THE SOCIALIFY WAY</span><h3>{reason.title}</h3><p>{reason.text}</p></div>
              <span className="reason-plus">↗</span>
            </Reveal>
          })}
        </div>
      </div>
    </section>
  )
}