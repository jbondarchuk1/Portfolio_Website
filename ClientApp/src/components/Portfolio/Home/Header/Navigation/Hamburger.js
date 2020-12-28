import React, { useState, useEffect } from 'react';
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
import './Hamburger.css';


function Hamburger(props) {
    const navState = ['', 'open']
    const dropDownCss = ['dropDownList', 'Show']
    const [dropDown, setDropDown] = useState(0);

    const handleDropDown = () =>{
        if (dropDown == 0)
        setDropDown(1);
        else setDropDown(0)
    };
    const resetDropDown = () =>{
        setDropDown(0)
    };

    return (
        <div>
            <div className="Hamburger">
                    <Link tag={Link} to='/' id='NavLink'>Home</Link>
                    <div className={`nav-icon ${navState[dropDown]}`} onClick={handleDropDown}>
                        <div></div>
                    </div>
                <div className={dropDownCss[dropDown]}>
                    <ul>
                        <li><Link tag={Link} to='/' id='NavLink'>Jason Bondarchuk</Link></li>
                        <li><Link tag={Link} to='/resume' id='NavLink'>Resume</Link></li>
                        <li><Link tag={Link} to='/projects' id='NavLink'>Projects</Link></li>
                        <li><Link tag={Link} to='/contact' id='NavLink'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="children" onClick={resetDropDown}>
                {props.children}
            </div>
        </div>
    );
  }
  
  export default Hamburger;
