import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section className="services section-pad section-light" id="services">
      <div className="container">
        <div className="section-heading section-heading--center">
          <Reveal className="eyebrow"><span className="eyebrow-dot" /> what we do</Reveal>
          <Reveal delay={.06}><h2>Making your brand<br /><em>STAND OUT?</em></h2></Reveal>
          <Reveal delay={.12}><p>yeah, that's kinda our thing.</p></Reveal>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(index % 3) * .07}>
                <motion.article className="service-card" whileHover={{ y: -6 }} transition={{ duration: .25, ease: 'easeOut' }}>
                  <div className="service-card-top"><span className="service-icon"><Icon size={23} strokeWidth={1.55} /></span><span className="service-number">{service.number}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="card-arrow" aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={18} /></a>
                  <div className="card-hover-line" />
                </motion.article>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="services-bottom"><span>one team. all the social things.</span><a href="#contact" className="text-link">let's make something good <ArrowUpRight size={16} /></a></Reveal>
      </div>
    </section>
  )
}