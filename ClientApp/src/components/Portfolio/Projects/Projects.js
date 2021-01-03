import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Project from './Project';
import SRSProgram from '../../../images&icons/gifs/SRSProgram.gif'
import Algorithm from '../../../images&icons/gifs/Visualizer.gif'
import Assembler from '../../../images&icons/gifs/Assembler.gif'
import WebScraper from '../../../images&icons/gifs/KanshudoScraper.gif'

/* props to pass in for each project: 
   - gif of project
   - name of project
   - description of project (one sentence)
   - link of project (nullable)
   - link to code on github
*/
/* template for data-reference later for index number
  tool: [
  "gif here",
  "name here",
  "language here",
  "sentence here", 
  ["link to project here or null", "is external (bool) or null"], 
  "link to code here"
  ],
*/

const projectData = {
  srsTool: [
  SRSProgram,
  "Japanese Spaced Repetition System",
  "C#/ASP.NET MVC",
  "Full-featured full-stack system with login, authentication, email verification and authorization. Renders tabular vocabulary data to the client on specified dates as per the spaced repetition algorithm.", 
  "http://srsprogrammvc-dev.us-east-2.elasticbeanstalk.com/", // for now null, but make sure to link this when we host this project; change to ["https://url.com", true]
  "https://github.com/jbondarchuk1/SRSProgramMultiplayerTrial"
  ],
  algorithm: [
    Algorithm,
    "Pathfinding Algorithm Visualizer",
    "JavaScript/ReactJS",
    "Visualizes Several Pathfinding Algorithms (DFS, BFS, Dijkstra’s, A Star).",
    "/Visualizer",
    "https://github.com/jbondarchuk1/Portfolio_Website"
    ],
  assembler: [
    Assembler,
    "Assembler",
    "Python",
    "Acts as an assembler/parser for bits feeding through a Hack computer CPU. Input: asm assembly language file, output: hack machine language/16 bit binary file.",
    null,
    "https://github.com/jbondarchuk1/Assembler-Project"
    ],
  webScraper: [
    WebScraper,
    "Kanshudo Web Scraper",
    "Python",
    "Scrapes the user’s currently saved favorites list on Kanshudo (bank of Japanese vocabulary) and inputs them to a spreadsheet via the google sheets API.",
    null,
    "https://github.com/jbondarchuk1/KanshudoScraper"
    ],
}

function Projects() {
    return (
      <div className='projects'>
        <h1 className='title'>PROJECTS</h1>
        <ul className='list'>
        {Object.entries(projectData).map( project => {
            return(
              <li><Project 
                Values={project[1]}
              ></Project></li>
              )
        })}
        </ul>
      </div>
    );
  }
  
  export default Projects;