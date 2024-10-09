import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/about'
import Layout from './src/components/layout'
import Contact from './src/components/contact'
import Projects from './src/components/Projects'
import Services from './src/components/Services'


// import Layout from './components/layout'
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route exact path="/" element={<Home />} />

<Route exact path="/about" element={<About />} />
<Route exact path="/projects" element={<Projects />} />
<Route exact path="/services" element={<Services/>} />
<Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

