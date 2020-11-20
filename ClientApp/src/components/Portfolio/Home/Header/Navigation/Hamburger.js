import React, { useState, useEffect } from 'react';
import './Hamburger.css';


function Hamburger() {
    const navState = ['', 'open']
    const dropDownCss = ['dropDownList', 'Show']
    const [dropDown, setDropDown] = useState(0);

    const handleDropDown = () =>{
        if (dropDown == 0)
        setDropDown(1);
        else setDropDown(0)
    };

    return (
    <div className="Hamburger">
            <a href='/' id='a'>Home</a>
            {/* <img src={HamburgerSVG} onClick={handleDropDown}/> */}
            <div className={`nav-icon ${navState[dropDown]}`} onClick={handleDropDown}>
                <div></div>
            </div>
        <div className={dropDownCss[dropDown]}>
            <ul>
                <li><a href='/'>Jason Bondarchuk</a></li>
                <li><a href='/Resume'>Resume</a></li>
                <li><a href='/Projects'>Projects</a></li>
                <li><a href='/Contact'>Contact</a></li>
            </ul>
        </div>
    </div>
    );
  }
  
  export default Hamburger;
