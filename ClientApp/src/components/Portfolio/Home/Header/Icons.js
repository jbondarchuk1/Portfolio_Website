import React from 'react';
import email from '../../../../images&icons/icons/email_transparent.png'
import github from '../../../../images&icons/icons/github_transparent.png'
import instagram from '../../../../images&icons/icons/instagram_transparent.png'
import linkedin from '../../../../images&icons/icons/linkedin_transparent.png'
import './Icons.css';


const icons = {
  email: [email, 'mailto:jason.r.bondarchuk@gmail.com']
, github: [github, 'https://github.com/jbondarchuk1']
, instagram: [instagram, 'https://www.instagram.com/thatguy3371/']
, linkedin: [linkedin, 'https://www.linkedin.com/']
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
        {Object.entries(icons).map( icon_list => {
          return(
            <li><a href={icon_list[1][1]}><img src={icon_list[1][0]} /></a></li>
        )})}
        </ul>
      </div>
    );
  }

export default Icons;
