import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-sec">
      <div className="container footer-container">
        <div>
          &copy; {new Date().getFullYear()} Joinserve. Click. Connect. Conquer. All rights reserved.
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
