import React, { useEffect, useState } from 'react';
import './Header.css';
import Icons from './Icons'
import Layout from './Layout';


const classForHeader = [
  ['titleCss', 'h1Css', 'pCss'],
  ['titleCss2', 'h1Css2', 'pCss2']
]

function Header(props) {
  let headerBody = (mobileView) => {
    return(
      <div>
          <div className='headerCss'>
            <div className={classForHeader[mobileView][0]}>
              <h1 className={classForHeader[mobileView][1]}>JASON BONDARCHUK</h1><br/><br /> <br />
              <p className={classForHeader[mobileView][2]}>
                  Self-taught software developer <br />just trying to make an impact in the world<br/><br/>
                  自分でコーディングと日本語を勉強してる。<br />いつか、僕の夢は現実になる。
              </p>
          </div>
          <Icons isTop='true'/>
        </div>
        {props.main}
      </div>
    )
  } 

    return(
      <div>
        <Layout children={headerBody} />
      </div>
    )
}
  
  export default Header;
