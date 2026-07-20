import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">NIKE</Link>
      <nav className="nav-links">
        <Link to="/">BỘ SƯU TẬP</Link>
        <Link to="/">LOOKBOOK</Link>
        <Link to="/support">LIÊN HỆ</Link>
      </nav>
      <div className="nav-icons">
        <span>🔍</span>
        <span>♡</span>
        <Link to="/cart">🛍️</Link>
      </div>
    </header>
  );
}