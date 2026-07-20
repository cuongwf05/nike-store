import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">NIKE</div>
      <div className="footer-col">
        <Link to="/support">HELP</Link>
        <span>ORDER STATUS</span>
        <span>SHIPPING</span>
        <span>RETURNS</span>
      </div>
      <div className="footer-col">
        <span>COMPANY INFO</span>
        <span>NEWS</span>
        <span>CAREERS</span>
        <span>SUSTAINABILITY</span>
      </div>
    </footer>
  );
}