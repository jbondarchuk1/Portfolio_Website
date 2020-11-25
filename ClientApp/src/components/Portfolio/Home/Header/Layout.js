import React, { useEffect, useState } from 'react';
import Navigation from './Navigation/Navigation';
import Hamburger from './Navigation/Hamburger';
import Footer from '../Footer';

function Layout(props) {
    const initialState = window.innerWidth < 1050 ? 1 : 0;
    const [mobileView, setMobileView] = useState(initialState);
    useEffect(()=>{
      window.addEventListener('resize', handleResize);
    })

    const handleResize = () =>{
      if (window.innerWidth < 1050){
        setMobileView(1);
      }else setMobileView(0)
    }
    // const mobileView = 1;
    if (mobileView === 1){
      return (
        <div>
            <Hamburger />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
      )}
      
      else{
        return(
        <div>
            <Navigation />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
        )
      }
    }
    
    export default Layout;