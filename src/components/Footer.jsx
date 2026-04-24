import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">KT</span>
          <span className="footer-name">Kartik Tiraki · BIM Engineer</span>
        </div>
        <div className="footer-right">
          <span className="footer-copy">
            © {new Date().getFullYear()} · Bengaluru, Karnataka, India
          </span>
        </div>
      </div>
    </footer>
  );
}
