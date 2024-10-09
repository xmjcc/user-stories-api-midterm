/**
 * Author: Wenping Wang
 * File Name: layout.jsx 
 * Date: 2024-09-30
 *  Student number: 301250155
 */

import React from 'react';
import { Link } from 'react-router-dom';
import spaceX from '../assets/spacex.jpg';

/**
 * Layout Component
 * This component serves as the main layout for the application,
 * including navigation links and a header.
 */

export default function Layout() {
 return (
 <>
  < img src={spaceX}alt="spaceX" className="spaceX" width="150px" height="150px"/>
 <h1>Benjamin Wang</h1>
 
 <nav>
 <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
 | <Link to="/about" style={{ marginRight: "10px" }}>About Me</Link>
 | <Link to="/projects" style={{ marginRight: "10px" }}>Projects</Link>
 | <Link to="/services" style={{ marginRight: "10px" }}>Services</Link>
 | <Link to="/contact" style={{ marginRight: "10px" }}>Contact Me</Link>
 

 </nav>
<br/>
 <hr />
 
</>
 
 );
}
