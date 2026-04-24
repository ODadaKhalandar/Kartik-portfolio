import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label fade-in">About Me</p>
            <h2 className="section-title fade-in fade-in-delay-1">
              WHO <span>I AM</span>
            </h2>
            <div className="divider fade-in fade-in-delay-2" />
            <p className="about-text fade-in fade-in-delay-2">
              I'm a Civil Engineer from Visvesvaraya Technological University with a passion
              for Building Information Modeling (BIM) and precast structural detailing.
              Currently based in Bengaluru, I work at TurnBIM Engineering Services.
            </p>
            <p className="about-text fade-in fade-in-delay-3">
              My hands-on experience spans multiple international precast projects —
              developing panel layouts, beam details, stair assemblies and hollow core slab
              drawings using advanced BIM workflows.
            </p>
            <div className="about-info fade-in fade-in-delay-4">
              <div className="info-row">
                <span className="info-key">Location</span>
                <span className="info-val">Bengaluru, Karnataka</span>
              </div>
              <div className="info-row">
                <span className="info-key">Email</span>
                <span className="info-val">tirakikartik468@gmail.com</span>
              </div>
              <div className="info-row">
                <span className="info-key">Phone</span>
                <span className="info-val">+91 9380788304</span>
              </div>
              <div className="info-row">
                <span className="info-key">Languages</span>
                <span className="info-val">English · Kannada · Hindi</span>
              </div>
            </div>
          </div>

          <div className="about-right fade-in fade-in-delay-3">
            <div className="about-card">
              <div className="card-accent" />
              <div className="card-inner">
                <div className="profile-initials">KT</div>
                <div className="profile-title">
                  <strong>Kartik Tiraki</strong>
                  <span>BIM Engineer · Civil</span>
                </div>
                <div className="profile-badges">
                  <span className="badge">Precast Detailing</span>
                  <span className="badge">AutoCAD</span>
                  <span className="badge">STAAD Pro</span>
                  <span className="badge">Structural Design</span>
                </div>
                <div className="profile-highlights">
                  <div className="highlight">
                    <span className="hl-num">5+</span>
                    <span>International BIM Projects</span>
                  </div>
                  <div className="highlight">
                    <span className="hl-num">BE</span>
                    <span>Civil Engineering, VTU</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
