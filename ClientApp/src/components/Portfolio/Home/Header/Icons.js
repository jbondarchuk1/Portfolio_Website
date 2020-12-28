import React from 'react';
import {Link} from 'react-router-dom';
import email from '../../../../images&icons/icons/email_transparent.png'
import github from '../../../../images&icons/icons/github_transparent.png'
import medium from '../../../../images&icons/icons/medium_transparent.png'
import linkedin from '../../../../images&icons/icons/linkedin_transparent.png'
import './Icons.css';


const icons = {
  github: [github, 'https://github.com/jbondarchuk1']
, medium: [medium, 'https://jason-r-bondarchuk.medium.com/']
, linkedin: [linkedin, 'https://www.linkedin.com/in/jason-bondarchuk-8457921ba/']
}

function Icons(props) {
    let iconsCss

    if (props.isTop == 'true'){
      iconsCss = 'iconsCssTop';
    }

    else{
      iconsCss = 'iconsCssBottom';
    }

    return (
      <div className={iconsCss}>
        <ul>
          <li><Link to="/contact"><img src={email} /></Link></li>
            {Object.entries(icons).map( icon_list => {
              return(
            <li><a href={icon_list[1][1]}><img src={icon_list[1][0]} /></a></li>
            )})}
        </ul>
      </div>
    );
  }

export default Icons;
