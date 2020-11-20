import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer';
import Hamburger from '../Home/Header/Navigation/Hamburger';
import Navigation from '../Home/Header/Navigation/Navigation';
import './Projects.css';

function Projects() {
    const initialState = window.innerWidth < 900 ? 1 : 0;
    const [mobileView, setMobileView] = useState(initialState);
    useEffect(()=>{
      window.addEventListener('resize', handleResize);
    })

    const handleResize = () =>{
      if (window.innerWidth < 1050){
        setMobileView(1);
      }else setMobileView(0)
    }

    let navBar;
    if(mobileView == 0){
        navBar = (
            <Navigation />
        )
    }else{
        navBar = (
            <Hamburger />
        )
    }
    return (
      <div className='projects'>
          {navBar}
        <Footer />
      </div>
    );
  }
  
  export default Projects;