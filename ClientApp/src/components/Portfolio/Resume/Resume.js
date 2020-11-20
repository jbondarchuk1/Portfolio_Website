import React, { useEffect, useState } from 'react';
import Navigation from '../Home/Header/Navigation/Navigation';
import Hamburger from '../Home/Header/Navigation/Hamburger';
import Footer from '../Home/Footer';
import './Resume.css';


function Resume () {
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

    return(
        <div div className='resumeWrapper'>
            <div className='resume'>
                {navBar}
                <div className='iframeWrapper'>
                    <h1>RESUME</h1>
                    <iframe src="https://drive.google.com/file/d/1nhWMikE1QRoRPn768r-GNfL2kIg79Gn7/preview" width="640" height="820"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;