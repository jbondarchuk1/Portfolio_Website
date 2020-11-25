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
    const [mouseIsPressed, setMouseIsPressed] = useState(false);

    useEffect(() => {
        initializeGrid();
    }, []);

    const handleMouseDown = (row,col) => {
        newGridWithWalls(Grid, row, col);
        setMouseIsPressed(true);
    }
    const handleMouseEnter = (row,col) => {
        if (!mouseIsPressed) return

        newGridWithWalls(Grid, row, col);
    }
    const handleMouseUp = () =>{
        setMouseIsPressed(false);
    }

    const newGridWithWalls = (grid, row, col) => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = node;
        newNode.isWall = !node.isWall;
        node.isWall = newNode.isWall;

        newGrid[row][col] = newNode;
        setGrid(newGrid);
        
        const startNode = grid[NODE_START_ROW][NODE_START_COL]
        const endNode = grid[NODE_END_ROW][NODE_END_COL]
        // need to handle new walls before this point
        startNode.isWall = false;
        endNode.isWall = false;
        let path = Astar(startNode, endNode); 
        setPath(path.path);
        setVisitedNodes(path.visitedNodes);
    }

    // creates grid
    const initializeGrid = () => {
        const grid = new Array(rows);

        for (let i = 0; i < rows; i++){
            grid[i] = new Array(cols);
        }
        
        createSpot(grid); // every row,column becomes a spot object
        setGrid(grid); // state grid becomes the initialized grid
        addNeighbors(grid); // each spot object fills its this.neighbors [] array

        const startNode = grid[NODE_START_ROW][NODE_START_COL]
        const endNode = grid[NODE_END_ROW][NODE_END_COL]
        // need to handle new walls before this point
        startNode.isWall = false;
        endNode.isWall = false;
        let path = Astar(startNode, endNode); 
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
            // if (Math.random(1) < 0.2 && this.isStart == false && this.isEnd == false) {
            //     this.isWall = true;
            // }
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
    let gridWithNodes = (
        <div>
            {Grid.map((row, rowIdx) => {
                return(
                    <div key={rowIdx} className="rowWrapper">
                        {row.map((col, colIdx) => {
                            const isStart = col.isStart;
                            const isEnd = col.isEnd;
                            const isWall = col.isWall;
                            return <Node 
                            key={colIdx}
                            isStart={isStart} 
                            isEnd={isEnd} 
                            row={rowIdx} 
                            col={colIdx} 
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row,col) => handleMouseDown(row,col)}
                            onMouseEnter={(row,col) => handleMouseEnter(row,col)}
                            onMouseUp={() => handleMouseUp()}
                            />
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
    let visualizing = false;
    const visualizePath = () => {

        visualizing = true;
        for(let i=0; i <= VisitedNodes.length; i++){
            if (i === VisitedNodes.length){
                setTimeout(() =>{
                    visualizeShortestPath(Path)
                    visualizing = false;
                 }, 20*i)
            }else{
                setTimeout(() => {
                    const node = VisitedNodes[i];
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";    
                }, 20 * i)
            }
        }
    }

    const resetGrid = (grid) => {
        if (visualizing == false){
            for (let i = 0; i < rows; i++){
                for (let j = 0; j < cols; j++) {
                    let node = grid[i][j];
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node";
                    if (node.isEnd){
                        document.getElementById(`node-${node.x}-${node.y}`).className = "node node-end";
                    }
                    else if (node.isStart){
                        document.getElementById(`node-${node.x}-${node.y}`).className = "node node-start";
                    }
                    grid[i][j].setWall();
                    gridWithNodes = gridWithNodes;
                }
            }
        }
    }

    console.log(Path);
    return (
        <div className='WrapperWrapper'>
            <div className="Wrapper">
                <h1>Pathfinding Visualizer</h1>
                <button onClick={visualizePath}>Visualize Path</button><br/>
                <button onClick={() => {
                    if (visualizing == false){
                        setGrid([])
                        setPath([])
                        setVisitedNodes([])
                        resetGrid(Grid)
                        initializeGrid()
                    }
                }}>reset</button>
                {gridWithNodes}
            </div>
        </div>
        )
}
export default Algorithm;