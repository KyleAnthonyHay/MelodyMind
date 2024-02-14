import React from 'react'
import './styles/Navbar.css'
import { Meteors } from "./ui/meteors"; 

const Navbar = () => {
  return (
    <>
      <nav>
        <div class="logo">Melody Mind</div>
        <div>
          <ul class="nav-links">
            <li><a href="#projects">Sign Up</a></li>
            <li><a href="#contact">Log In</a></li>
          </ul>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar