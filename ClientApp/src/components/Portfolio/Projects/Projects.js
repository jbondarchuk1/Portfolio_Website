import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import Project from './Project';
import SRSProgram from '../../../images&icons/gifs/SRSProgram.gif'
import Algorithm from '../../../images&icons/gifs/Visualizer.gif'
import Assembler from '../../../images&icons/gifs/Assembler.gif'
import WebScraper from '../../../images&icons/gifs/KanshudoScraper.gif'
import UnityGameGIF from '../../../images&icons/gifs/Game.gif'
import GFDiscordGIF from '../../../images&icons/gifs/Bot.gif'


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
  unityGame: [
    UnityGameGIF,
    "3D Game Made in Unity",
    "C#, Blender, Unity",
    "My in-progress hobby project based on my imagination and Metal Gear Solid. Written in C#, I developed the AI using Finite State Machines, art with blender, and many other features. I understand 3D vector math and raycasting among many other game development skills. Please enter the password-> helloworld to view and download the executable build from itch.io.",
    "https://jbondarchuk.itch.io/momos-nightmare",
    "https://github.com/jbondarchuk1/MomoNightmare"
  ],
  girlFriendDiscordBot: [
    GFDiscordGIF,
    "Alexa Compatible Discord Bot",
    "Nodejs",
    "My girlfriend moved further away and to keep her company I designed a discord bot. It keeps track of the number of days until our next flight, runs Cron job reminders, has data saved and loaded from json, and has an Alexa command that wakes my Alexa and has Alexa say \"Girlfriend needs attention!\", followed by a push notification.",
    null,
    "https://github.com/jbondarchuk1/JCLoveyDovey"
  ],
  srsTool: [
    SRSProgram,
    "Japanese Spaced Repetition Web Application",
    "C#/ASP.NET MVC",
    "Full-featured full-stack system with login, authentication, email verification and authorization. Renders tabular vocabulary data to the client on specified dates as per the spaced repetition algorithm.", 
    null, // for now null, but make sure to link this when we host this project; change to ["https://url.com", true]
    "https://github.com/jbondarchuk1/SRSProgramMultiplayerTrial"
  ],
  webScraper: [
    WebScraper,
    "Kanshudo Web Scraper",
    "Python",
    "Scrapes the user’s currently saved favorites list on Kanshudo (bank of Japanese vocabulary) and inputs them to a spreadsheet via the google sheets API.",
    null,
    "https://github.com/jbondarchuk1/KanshudoScraper"
    ],
  assembler: [
    Assembler,
    "Assembler",
    "Python",
    "Acts as an assembler/parser for bits feeding through a Hack computer CPU. Input: asm assembly language file, output: hack machine language/16 bit binary file.",
    null,
    "https://github.com/jbondarchuk1/Assembler-Project"
    ],
    algorithm: [
      Algorithm,
      "Pathfinding Algorithm Visualizer",
      "JavaScript/ReactJS",
      "Visualizes Several Pathfinding Algorithms (DFS, BFS, Dijkstra’s, A Star). Built with a little help so I've put this at the bottom. I understand how the algorithms work, don't worry.",
      "/Visualizer",
      "https://github.com/jbondarchuk1/Portfolio_Website"
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