import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'BIM & CAD',
    items: [
      { name: 'Precast Detailing (BIM)', level: 90 },
      { name: 'AutoCAD', level: 85 },
      { name: 'STAAD Pro', level: 75 },
      { name: 'Revit (Basic)', level: 55 },
    ],
  },
  {
    category: 'Civil Engineering',
    items: [
      { name: 'Surveying & Soil Testing', level: 80 },
      { name: 'SFD & BMD Calculations', level: 85 },
      { name: 'Concrete Technology', level: 80 },
      { name: 'Lab Testing (Aggregates)', level: 78 },
    ],
  },
  {
    category: 'Precast Elements',
    items: [
      { name: 'Single Layer Panels', level: 95 },
      { name: 'Beams & Columns', level: 92 },
      { name: 'Hollow Core Slabs', level: 88 },
      { name: 'Stair Flights & Landings', level: 85 },
      { name: 'Sandwich Panels', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`;
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-bar" ref={barRef} style={{ width: '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
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

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Expertise</p>
        <h2 className="section-title fade-in fade-in-delay-1">MY <span>SKILLS</span></h2>
        <div className="divider fade-in fade-in-delay-2" />

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className={`skill-group fade-in fade-in-delay-${gi + 2}`}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-list">
                {group.items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-row fade-in fade-in-delay-4">
          <span className="tools-label">Also worked with</span>
          {['Tekla', 'Navisworks', 'MS Office', 'SFD/BMD', 'Eco-Friendly Materials'].map(tool => (
            <span key={tool} className="tool-tag">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
