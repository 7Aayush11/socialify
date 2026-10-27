import { ArrowUpRight, Sparkles } from 'lucide-react'
import { galleryItems } from '../data/content.js'
import Reveal from './Reveal.jsx'

export default function Showcase() {
  return (
    <section className="showcase section-pad section-light" id="work">
      <div className="container">
        <div className="showcase-heading">
          <div><Reveal className="eyebrow"><span className="eyebrow-dot" /> a little inspiration</Reveal><Reveal delay={.08}><h2>Good Content.<br /><em>Better Days.</em></h2></Reveal></div>
          <Reveal delay={.15} className="showcase-note"><Sparkles size={19} /><p>Every brand has a story worth telling.<br />Here's the kind of world we love creating.</p></Reveal>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => <Reveal key={item.title} delay={(index % 3) * .06} className={`gallery-item ${item.tone}`}>
            <div className="polaroid-gallery">
              <div className="gallery-image-wrap"><img src={item.image} alt={`${item.category} moodboard inspiration`} loading="lazy" /></div>
              <div className="gallery-caption"><span>{item.category}</span><strong>{item.title}</strong></div>
            </div>
          </Reveal>)}
        </div>
        <Reveal className="showcase-foot"><span className="tag">A NOTE FROM US</span><p>We're getting our portfolio ready. <em>Case studies coming soon.</em> The real good stuff will be here soon — no made-up client stories, ever.</p><a href="#contact" className="text-link">be part of the story <ArrowUpRight size={16} /></a></Reveal>
      </div>
    </section>
  )
}