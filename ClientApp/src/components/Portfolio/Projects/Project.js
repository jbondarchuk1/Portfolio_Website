import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project(props) {
    const project = () => {
        if (props.Values[4] == null){
            return
        }else if (props.Values[4][0] == "/"){
            return <Link to={props.Values[4]}>Project</Link>
        }else{
            return (<a href={props.Values[4]}>Project</a>)
        }
    }
    return (
      <div className='project'>
          <img src={props.Values[0]} height="200" width="400"></img>
          <h1><strong>{props.Values[1]}</strong></h1> {/*Name: */} 
          <h2><strong>{props.Values[2]}</strong></h2> {/*Language: */}
          <h3>{props.Values[3]}</h3> {/*Description: */}
            <div>
                {project()}
            </div>

          <a href={props.Values[5]}>Code</a>
      </div>
    );
  }
  
  export default Project;