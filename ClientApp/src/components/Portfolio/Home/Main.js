import React from 'react';
import Header from './Header/Header'
import './Main.css'

function Main() {
  let mymain = (
      <div className="Main">
      <section>
        <p id='mainHeader'>ABOUT ME</p>
        <p id='body1'>
          I am originally a software engineer from Long Island and I am now
          studying for my MS in Computer Science at Johns Hopkins University. 
          I currently live in Kumamoto, Japan.

          I'd like to think of myself as an autodidact. I love to tinker and learn new things.
          I'm also learning Japanese and searching for 
          a way to tie the things I'm passionate about together. 
          Come with me on my journey!
        </p>
      </section>
    </div>
    )


    return (
      
      <div className='app'>
        <Header main={mymain}/>
      </div>
    );
  }
  
  export default Main;