import React, { useEffect, useRef } from 'react';
import './Education.css';

const education = [
  {
    degree: 'BE – Civil Engineering',
    institute: 'Government Engineering College, Raichur',
    university: 'Visvesvaraya Technological University',
    year: '2024',
    score: '70.71%',
    highlight: true,
  },
  {
    degree: 'Diploma – Civil Engineering',
    institute: 'Government Polytechnic College, Rabakavi',
    university: 'Karnataka State Board',
    year: '2021',
    score: '66.05%',
    highlight: false,
  },
  {
    degree: 'SSLC (10th Standard)',
    institute: 'Poorna Prajnya High School, Rampur',
    university: 'Karnataka State Board',
    year: '2018',
    score: '71.52%',
    highlight: false,
  },
];

const achievements = [
  'Class Representative for 2 years (9th & 10th standard)',
  'Won prizes in school Quiz competitions',
  'Won prizes for highest subject marks in engineering college',
  'Won prizes in long jump events during schooling',
  'Participated in Confederation to Agricultural College, Raichur',
  'Visited RTPS for industrial exposure',
  'Attended software campus at SLN College, Raichur',
];

export default function Education() {
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
    <section id="education" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Background</p>
        <h2 className="section-title fade-in fade-in-delay-1">EDUCATION & <span>ACHIEVEMENTS</span></h2>
        <div className="divider fade-in fade-in-delay-2" />

        <div className="edu-layout">
          <div className="edu-col fade-in fade-in-delay-2">
            <h3 className="edu-col-title">Academic Qualifications</h3>
            <div className="edu-list">
              {education.map((edu, i) => (
                <div key={i} className={`edu-card ${edu.highlight ? 'highlight' : ''}`}>
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-body">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institute">{edu.institute}</p>
                    <p className="edu-university">{edu.university}</p>
                    <div className="edu-score">
                      <span className="score-label">Score</span>
                      <span className="score-val">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edu-col fade-in fade-in-delay-3">
            <h3 className="edu-col-title">Achievements & Activities</h3>
            <div className="achieve-list">
              {achievements.map((item, i) => (
                <div key={i} className="achieve-item">
                  <span className="achieve-icon">◆</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="hobby-section">
              <h4 className="hobby-title">Hobbies</h4>
              <div className="hobby-list">
                {['Reading Newspaper', 'Cricket', 'Badminton', 'Chess'].map(h => (
                  <span key={h} className="hobby-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
