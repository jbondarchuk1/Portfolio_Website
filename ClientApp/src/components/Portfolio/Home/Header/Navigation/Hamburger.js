import React, { useState, useEffect } from 'react';
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
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
            <NavLink tag={Link} to='/' id='NavLink'>Home</NavLink>
            {/* <img src={HamburgerSVG} onClick={handleDropDown}/> */}
            <div className={`nav-icon ${navState[dropDown]}`} onClick={handleDropDown}>
                <div></div>
            </div>
        <div className={dropDownCss[dropDown]}>
            <ul>
                <li><NavLink tag={Link} to='/' id='NavLink'>Jason Bondarchuk</NavLink></li>
                <li><NavLink tag={Link} to='/resume' id='NavLink'>Resume</NavLink></li>
                <li><NavLink tag={Link} to='/projects' id='NavLink'>Projects</NavLink></li>
                <li><NavLink tag={Link} to='/contact' id='NavLink'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
    );
  }
  
  export default Hamburger;
