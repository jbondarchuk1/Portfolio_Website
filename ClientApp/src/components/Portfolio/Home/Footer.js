import React from 'react';
import Icons from './Header/Icons';

const footerCss = {
    backgroundColor: '#333',
    height: '20em',
    color: 'white',
    textAlign: 'center'
}
const textCss = {
    padding: '20 20 20 20',
    fontSize: '3em',
    paddingTop: '1em',
}

function Footer() {
    return (
      <div className="Footer" style={footerCss}>
        <footer>
            <p style={textCss}>CONTACT</p>
            <Icons isTop='false'/>
        </footer>
      </div>
    );
  }
  
  export default Footer;