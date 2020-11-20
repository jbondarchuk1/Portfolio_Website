import React, { useEffect, useState } from 'react';
import './Algorithm.css';
import Node from "./Node";
import Astar from './AStar';
import Layout from '../Portfolio/Home/Header/Layout';

const cols = 25;
const rows = 15;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows-1;
const NODE_END_COL = cols-1;

const Algorithm = () => {
    const [Grid, setGrid] = useState([]);
    const [Path, setPath] = useState([]);
    const [VisitedNodes, setVisitedNodes] = useState([]);

    useEffect(() => {
        initializeGrid();
    }, []);

    // creates grid
    const initializeGrid = () => {
        const grid = new Array(rows);

        for (let i = 0; i < rows; i++){
            grid[i] = new Array(cols);
        }
        createSpot(grid);
        setGrid(grid);
        addNeighbors(grid);
        const startNode = grid[NODE_START_ROW][NODE_START_COL]
        const endNode = grid[NODE_END_ROW][NODE_END_COL]
        let path = Astar(startNode, endNode);
        startNode.isWall = false;
        endNode.isWall = false;
        setPath(path.path);
        setVisitedNodes(path.visitedNodes);
    }

    // add neighbors
    const addNeighbors = (grid) => {
        for (let i=0; i < rows; i++){
            for(let j = 0; j<cols; j++){
                grid[i][j].addneighbors(grid);
            }
        }
    }

    const createSpot = (grid) => {
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i,j);   
            }
        }
    }

    // Spot object
    function Spot(i,j) {
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];

        this.isWall = false;
        this.setWall = () =>{
            if (Math.random(1) < 0.2) {
                this.isWall = true;
            }
        }
        this.setWall();

        this.previous = undefined;
        this.addneighbors = function(grid){
            let i = this.x;
            let j = this.y
            if( i > 0){
                this.neighbors.push(grid[i-1][j]);
            }
            if(i < rows - 1) {
                this.neighbors.push(grid[i + 1][j])
            }
            if( j > 0){
                this.neighbors.push(grid[i][j - 1]);
            }
            if(j < cols - 1) {
                this.neighbors.push(grid[i][j + 1])
            }
        }
    }

    // grid with nodes
    const gridWithNodes = (
        <div>
            {Grid.map((row, rowIdx) => {
                return(
                    <div key={rowIdx} className="rowWrapper">
                        {row.map((col, colIdx) => {
                            const isStart = col.isStart;
                            const isEnd = col.isEnd;

                            const isWall = col.isWall;
                            return <Node key={colIdx} isStart={isStart} isEnd={isEnd} row={rowIdx} col={colIdx} isWall={isWall}/>
                        })}
                    </div>
                )
            })}   
        </div>
    )

    const visualizeShortestPath = (shortestPathNodes) => {
        for(let i=0; i < shortestPathNodes.length; i++){
            setTimeout(() =>{
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path";
            }, 10*i)
        }
    }
    const visualizePath = () => {
        for(let i=0; i <= VisitedNodes.length; i++){
            if (i === VisitedNodes.length){
                setTimeout(() =>{
                    visualizeShortestPath(Path)
                 }, 20*i)
            }else{
                setTimeout(() => {
                    const node = VisitedNodes[i];
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";    
                }, 20 * i)
            }
        }
    }

    console.log(Path);
    const myalgorithm = () =>{
    return (
        <div className='WrapperWrapper'>
            <div className="Wrapper">
                <h1>Pathfinding Visualizer</h1>
                <button onClick={visualizePath}>Visualize Path</button>
                {gridWithNodes}
            </div>
        </div>
    )
    }
    return (
        <Layout children={myalgorithm} />
    )
}
export default Algorithm