import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Instagram, Mail, MessageCircle } from 'lucide-react'
import Reveal from './Reveal.jsx'

const serviceOptions = ['Social Media', 'Ads', 'Designing', 'Branding', 'Shoots', 'Not sure yet']

export default function Contact() {
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', brand: '', message: '', website: '' })

  const update = event => setForm({ ...form, [event.target.name]: event.target.value })
  const toggleService = service => setSelected(current => current.includes(service) ? current.filter(item => item !== service) : [...current, service])

  function handleSubmit(event) {
    event.preventDefault()
    // Front-end demo only. Connect Formspree/Web3Forms/EmailJS before production.
    if (form.website) return
    setSubmitted(true)
  }

  return (
    <section className="contact section-pad section-light" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Reveal className="eyebrow"><span className="eyebrow-dot" /> get in touch</Reveal>
          <Reveal delay={.08}><h2>Let's grow<br /><em>your brand.</em></h2></Reveal>
          <Reveal delay={.15}><p>Tell us a little about your brand and what you'd like to achieve. We'll get back to you soon.</p></Reveal>
          <Reveal delay={.22} className="contact-direct">
            <a href="mailto:hello@socialify.example"><span><Mail size={19} /></span><div><small>DROP US A NOTE</small><strong>hello@yourbrand.com</strong></div><ArrowUpRight size={16} /></a>
            <a href="#contact"><span><MessageCircle size={19} /></span><div><small>LET'S CHAT</small><strong>WhatsApp / Phone</strong></div><ArrowUpRight size={16} /></a>
            <a href="#contact"><span><Instagram size={19} /></span><div><small>FOLLOW THE VIBE</small><strong>@socialify</strong></div><ArrowUpRight size={16} /></a>
          </Reveal>
          <Reveal delay={.3} className="contact-note"><span>✳</span> good things start with a hello.</Reveal>
        </div>
        <Reveal delay={.1} className="contact-form-wrap">
          {submitted ? (
            <div className="form-success" role="status"><CheckCircle2 size={42} /><span className="eyebrow">MESSAGE READY</span><h3>Thanks for reaching out!</h3><p>This demo form isn't connected to an inbox yet. Connect a form service to receive real enquiries.</p><button className="button button--outline" onClick={() => setSubmitted(false)}>send another message</button></div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 — THE INTRO</span><p>Let's get to know you.</p></div>
              <div className="form-row">
                <label>Your name <b>*</b><input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required autoComplete="name" /></label>
                <label>Email <b>*</b><input name="email" type="email" value={form.email} onChange={update} placeholder="you@brand.com" required autoComplete="email" /></label>
              </div>
              <div className="form-row">
                <label>Phone / WhatsApp <span>optional</span><input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 00000 00000" autoComplete="tel" /></label>
                <label>Brand or business name <span>optional</span><input name="brand" value={form.brand} onChange={update} placeholder="Your brand name" /></label>
              </div>
              <fieldset className="service-fieldset"><legend>What are you looking for? <span>choose all that fit</span></legend><div className="service-options">{serviceOptions.map(service => <button type="button" key={service} className={`service-option ${selected.includes(service) ? 'is-selected' : ''}`} onClick={() => toggleService(service)} aria-pressed={selected.includes(service)}>{selected.includes(service) && <span>✓ </span>}{service}</button>)}</div></fieldset>
              <label>Tell us about your brand <b>*</b><textarea name="message" value={form.message} onChange={update} placeholder="What's the big idea? What would you love to achieve?" rows="4" required /></label>
              <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={update} /></label>
              <div className="form-submit-row"><span>By sending this, you're happy for us to reply about your enquiry.</span><button className="button" type="submit">send it our way <ArrowUpRight size={16} /></button></div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}