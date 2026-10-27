import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { processSteps } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Process() {
  return (
    <section className="process section-pad section-dark" id="process">
      <div className="process-glow" />
      <div className="container">
        <div className="process-heading">
          <div><Reveal className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> how it works</Reveal><Reveal delay={.08}><h2>From idea to<br /><em>insta-worthy.</em></h2></Reveal></div>
          <Reveal delay={.16} className="process-aside"><p>No mystery, no messy handoffs. Just a thoughtful process that turns your goals into good creative.</p><a href="#contact" className="text-link text-link--light">let's get started <ArrowDownRight size={16} /></a></Reveal>
        </div>
        <div className="process-track">
          {processSteps.map((step, index) => <Reveal key={step.number} delay={index * .09} className="process-step">
            <motion.div className="process-number" whileHover={{ scale: 1.04, backgroundColor: '#E4DFD3', color: '#3E4D2F' }} transition={{ duration: .25 }}>{step.number}</motion.div>
            <h3>{step.title}</h3><p>{step.text}</p>
          </Reveal>)}
        </div>
        <div className="process-bottom"><span>FROM FIRST HELLO TO THE NEXT BIG THING</span><span className="process-bottom-line" /><span>✳</span></div>
      </div>
    </section>
  )
}