"use client"

import Link from "next/link";
import { useState } from "react";

export default function HeaderPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <h1>Portfolio</h1>
  
      <i className='bx bx-menu' id="menu-icon" onClick={handleMenuClick}></i>

      <div className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <Link href="/">Home</Link> 
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link> 
        <Link href="/contact">Contact</Link> 
      </div>
    </div>
  );
}
