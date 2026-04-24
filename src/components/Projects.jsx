import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Four-Storey Residential Building',
    type: 'BE Final Project',
    tech: ['STAAD Pro', 'AutoCAD', 'Structural Analysis'],
    desc: 'Complete planning, analysis, and structural design of a four-storey residential building. Covered load calculations, beam-column design, slab design, and foundation design using STAAD Pro.',
    tags: ['Structural Design', 'STAAD Pro', 'Foundation', 'RCC'],
  },
  {
    number: '02',
    title: 'Solna Link UPB – Precast BIM',
    type: 'TurnBIM Project',
    tech: ['BIM Software', 'Precast Detailing', 'Coordination'],
    desc: 'Developed complete precast element package for a mixed-use development in Sweden: sandwich panels, single layer panels, head walls, and single layer reinforcement layouts. Coordinated with structural and MEP teams.',
    tags: ['Sandwich Panels', 'Reinforcement', 'Sweden', 'BIM'],
  },
  {
    number: '03',
    title: 'Norra & Södra UPB – Sweden',
    type: 'TurnBIM Project',
    tech: ['BIM', 'Precast Detailing', 'Shop Drawings'],
    desc: 'Multi-element precast package including stair flights, stair landings, hollow core slabs, beams, columns and panels. Produced full shop drawing set with BOM reports for fabrication.',
    tags: ['Hollow Core', 'Stair Flights', 'Beams', 'Columns'],
  },
  {
    number: '04',
    title: 'Eco-Friendly Building Materials',
    type: 'Industrial Internship',
    tech: ['Fly Ash', 'Pond Ash', 'Material Testing'],
    desc: 'Research and manufacturing study of eco-friendly building materials using industrial by-products (Fly Ash and Pond Ash). Gained knowledge in sustainable construction at CASHUTEC Nirmithi Kendra.',
    tags: ['Sustainable', 'Fly Ash', 'Pond Ash', 'Research'],
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Portfolio</p>
        <h2 className="section-title fade-in fade-in-delay-1">KEY <span>PROJECTS</span></h2>
        <div className="divider fade-in fade-in-delay-2" />

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.number}
              className={`proj-item fade-in fade-in-delay-${i + 2}`}
            >
              <div className="proj-num">{proj.number}</div>
              <div className="proj-body">
                <div className="proj-type">{proj.type}</div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-tag-row">
                  {proj.tags.map(tag => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
