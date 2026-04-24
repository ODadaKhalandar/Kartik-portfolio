import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const jobs = [
  {
    company: 'TurnBIM Engineering Services',
    role: 'BIM Engineer – Precast Detailing',
    period: 'Aug 2023 – Present',
    location: 'Bengaluru, Karnataka',
    current: true,
    projects: [
      {
        name: 'Huddersfield (UK)',
        period: 'Aug – Sep',
        items: ['Single layer panels', 'Beams', 'Lift units'],
      },
      {
        name: 'Lilla Theatern UPB (Sweden)',
        period: 'Oct – Nov',
        items: ['Single layer panels', 'Curved single layer panels', 'Beams', 'Columns', 'Hollow core slabs'],
      },
      {
        name: 'Norra & Södra UPB (Sweden)',
        period: 'Sep – Jan',
        items: ['Single layer panels', 'Beams', 'Columns', 'Stair flights & landings', 'Hollow core slabs'],
      },
      {
        name: 'Solna Link UPB (Sweden)',
        period: 'Ongoing',
        items: ['Single layer panels', 'Sandwich panels', 'Single layer reinforcement', 'Head walls'],
      },
    ],
    highlights: [
      'Delivered 5+ international BIM precast projects',
      'Collaborated with project teams across UK and Sweden',
      'Produced fabrication, shop, GA, and erection drawings',
      'Generated BOM and material reports with high accuracy',
    ],
  },
  {
    company: 'CASHUTEC NIRMITHI KENDRA',
    role: 'Industrial Intern – Civil',
    period: '2022 – 2023',
    location: 'Shaktinagar, Raichur',
    current: false,
    highlights: [
      'Manufacturing of Eco-Friendly Building Materials',
      'Worked with industrial by-products: Fly Ash & Pond Ash',
      'Hands-on experience in sustainable construction materials',
    ],
  },
];

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0);
  const sectionRef = useRef(null);

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

  const job = jobs[activeJob];

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Career</p>
        <h2 className="section-title fade-in fade-in-delay-1">WORK <span>EXPERIENCE</span></h2>
        <div className="divider fade-in fade-in-delay-2" />

        <div className="exp-layout fade-in fade-in-delay-2">
          <div className="exp-tabs">
            {jobs.map((j, i) => (
              <button
                key={i}
                className={`exp-tab ${activeJob === i ? 'active' : ''}`}
                onClick={() => setActiveJob(i)}
              >
                <span className="tab-company">{j.company}</span>
                <span className="tab-period">{j.period}</span>
                {j.current && <span className="tab-badge">Current</span>}
              </button>
            ))}
          </div>

          <div className="exp-content">
            <div className="exp-header">
              <h3 className="exp-role">{job.role}</h3>
              <div className="exp-meta">
                <span className="exp-company">{job.company}</span>
                <span className="exp-dot">·</span>
                <span className="exp-location">{job.location}</span>
                <span className="exp-dot">·</span>
                <span className="exp-period">{job.period}</span>
              </div>
            </div>

            {job.projects && (
              <div className="exp-projects">
                <p className="exp-section-title">Projects Worked On</p>
                <div className="projects-list">
                  {job.projects.map((proj) => (
                    <div key={proj.name} className="proj-card">
                      <div className="proj-header">
                        <span className="proj-name">{proj.name}</span>
                        <span className="proj-period">{proj.period}</span>
                      </div>
                      <ul className="proj-items">
                        {proj.items.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="exp-highlights">
              <p className="exp-section-title">Key Contributions</p>
              <ul className="highlights-list">
                {job.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="highlight-arrow">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
