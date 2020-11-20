import React, { useEffect, useState } from 'react';
import './Navigation.css';

// me just messing around with state
const scrollClasses = [
  ['nav', 'listContainer', 'list1', 'list2'], 
  ['onScroll', 'scrollListContainer', 'scrollList1', 'scrollList2']
]

// make the href route to the main page
function Navigation() {
  const [navStyle, setNavStyle] = useState(0);
  
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () => { 
      console.log(window.scrollY); 
      if (window.scrollY > 0){
        setNavStyle(1)
      }
      else{
        setNavStyle(0);
      }
  }

    return (
      <nav className={scrollClasses[navStyle][0]}>
        <div className={scrollClasses[0][1]}>
            <ul className={scrollClasses[navStyle][2]}>
                <li><a href='/'>Jason Bondarchuk</a></li>
                <li><a href='/Resume'>Resume</a></li>
                <li><a href='/Projects'>Projects</a></li>
            </ul>

            <ul className={scrollClasses[navStyle][3]}>
                <li><a href='/Contact'>Contact</a></li>
            </ul>
        </div>
      </nav>
    )
  }
  
  export default Navigation;
