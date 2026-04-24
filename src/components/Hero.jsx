import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let w, h;
    let particles = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Grid dots
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.3;
        this.alpha = Math.random() * 0.4 + 0.05;
        this.speed = Math.random() * 0.3 + 0.1;
        this.dy = -this.speed;
      }
      update() {
        this.y += this.dy;
        if (this.y < -10) this.reset();
        this.y = this.y;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#e8ff47';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-grid-overlay" />

      <div className="hero-content">
        <div className="hero-tag fade-up">
          <span className="tag-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name fade-up delay-1">
          <span className="name-first">KARTIK</span>
          <span className="name-last">TIRAKI</span>
        </h1>

        <div className="hero-title-wrap fade-up delay-2">
          <span className="hero-title">BIM Engineer</span>
          <span className="hero-sep">/</span>
          <span className="hero-title">Precast Detailer</span>
          <span className="hero-sep">/</span>
          <span className="hero-title">Civil Engineer</span>
        </div>

        <p className="hero-desc fade-up delay-3">
          Building tomorrow's infrastructure with precision modeling.<br />
          Specializing in Precast BIM detailing & structural coordination.
        </p>

        <div className="hero-cta fade-up delay-4">
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
          <a href="#experience" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Work
          </a>
        </div>

        <div className="hero-stats fade-up delay-5">
          <div className="stat">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">BIM Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">70%</span>
            <span className="stat-label">BE Score</span>
          </div>
        </div>
      </div>

      <button className="scroll-down" onClick={scrollDown} aria-label="Scroll down">
        <span className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </button>
    </section>
  );
}
