import React from 'react';
import Header from './Header/Header'
import './Main.css'

function Main() {
  let mymain = (
      <div className="Main">
      <section>
        <p id='mainHeader'>About Me</p>
        <p id='body1'>
          I'd like to think of myself as an autodidact. Even while in university I tend 
          to pursue learning things that I'm most gravitated towards. This is why I've set
          myself the goal to self learn software engineering, and not just popular technologies
          but theory as well. I'm also learning Japanese and searching for 
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