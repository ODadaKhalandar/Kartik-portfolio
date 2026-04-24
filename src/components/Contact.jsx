import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Let's Connect</p>
        <h2 className="section-title fade-in fade-in-delay-1">GET IN <span>TOUCH</span></h2>
        <div className="divider fade-in fade-in-delay-2" />

        <div className="contact-layout fade-in fade-in-delay-2">
          <div className="contact-left">
            <p className="contact-intro">
              I'm actively looking for opportunities in BIM engineering and civil design.
              Whether you have a project, a position, or just want to connect — I'd love to hear from you.
            </p>

            <div className="contact-cards">
              <div className="contact-card" onClick={() => copy('tirakikartik468@gmail.com', 'email')}>
                <div className="contact-icon">✉</div>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">tirakikartik468@gmail.com</span>
                </div>
                <button className="copy-btn">
                  {copied === 'email' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="contact-card" onClick={() => copy('+919380788304', 'phone')}>
                <div className="contact-icon">☎</div>
                <div className="contact-info">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 9380788304</span>
                </div>
                <button className="copy-btn">
                  {copied === 'phone' ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="contact-card no-copy">
                <div className="contact-icon">📍</div>
                <div className="contact-info">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="cta-box">
              <div className="cta-tag">Open to Work</div>
              <h3 className="cta-heading">BIM Engineer &<br />Civil Design Roles</h3>
              <p className="cta-body">
                Experienced in precast BIM detailing with international project exposure.
                Looking for full-time opportunities in BIM, structural detailing, or civil design.
              </p>
              <a href="/resume.pdf" download="Kartik_Tiraki_Resume.pdf" className="cta-download">
                <span className="dl-icon">↓</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
