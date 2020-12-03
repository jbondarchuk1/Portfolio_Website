import React, {Component} from 'react';
import Node from './Node';
import './Visualizer.css';
import {dijkstra} from './Dijkstra';
import {AStar} from './AStar';
import {dfs} from './DFS';
import {bfs} from './BFS';

export default class Visualizer extends Component {
    constructor(){
        super();
        this.state = {
            grid: [],
            START_NODE_ROW: 5,
            FINISH_NODE_ROW: 5,
            START_NODE_COL: 5,
            FINISH_NODE_COL: 15,

            mouseIsPressed: false,
            ROW_COUNT: 25,
            COLUMN_COUNT: 35,

            isVisualizing: false,
            isStartNode: false,
            isFinishNode: false,
            isWallNode: false,

            currRow: 0,
            currCol: 0,
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.toggleIsVisualizing = this.toggleIsVisualizing.bind(this);
    }

    componentDidMount() {
        const grid = this.initializeGrid();
        this.setState({grid: grid});
    }

    toggleIsVisualizing() {
        this.setState({isVisualizing: !this.state.isVisualizing})
    }

    initializeGrid (rowCount = this.state.ROW_COUNT, colCount = this.state.COLUMN_COUNT) {
        const initialGrid = [];
        for (let row = 0; row < rowCount; row++){
            const currentRow = [];
            for (let col = 0; col < colCount; col++) {
                currentRow.push(this.Node(row, col));
            }
            initialGrid.push(currentRow);
        }
        return initialGrid;
    }

    Node (row, col) {
        return {
            row: row,
            col: col,
            isStart: row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
            isFinish:row === this.state.FINISH_NODE_ROW && col === this.state.FINISH_NODE_COL,
            distance: Infinity,
            distanceToFinishNode:
                Math.abs(this.state.FINISH_NODE_ROW - row) +
                Math.abs(this.state.FINISH_NODE_COL - col),
            isVisited: false,
            isWall: false,
            previousNode: null,
            isNode: true, 
        }
    }

    handleMouseDown (row,col) {
        if(!this.state.isVisualizing){
            if (this.isVisualizerClear()){
                if (document.getElementById(`node-${row}-${col}`).className ==='node node-start'){
                    this.setState({
                        mouseIsPressed: true,
                        isStartNode: true,
                        currRow: row,
                        currCol: col, 
                    })
                }else if(document.getElementById(`node-${row}-${col}`).className === 'node node-finish' ){
                    this.setState({              
                        mouseIsPressed: true,
                        isFinishNode: true,
                        currRow: row,
                        currCol: col,
                    })
                }else {
                    const newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
                    this.setState({
                      grid: newGrid,
                      mouseIsPressed: true,
                      isWallNode: true,
                      currRow: row,
                      currCol: col,
                    })
                }
            this.clearVisualizer();
            }
        }
    }   

    // bool returns if the visualization css is still on the board
    isVisualizerClear() {
        for (const row of this.state.grid) {
            for (const node of row) {
                const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`,).className;
                if (
                    nodeClassName === 'node node-visited' ||
                    nodeClassName === 'node node-shortest-path'
                 ) {
                return false;
                }
            }
        }
        return true;
    }

    handleMouseEnter(row, col) {
        if (!this.state.isVisualizing) {
            if (this.state.mouseIsPressed) {
                const nodeClassName = document.getElementById(`node-${row}-${col}`).className;
                // allow placing the start node and end nodes only in areas that are not set as walls
            
            if (this.state.isStartNode) {
                if (nodeClassName !== 'node node-wall') {
                    const prevStartNode = this.state.grid[this.state.currRow][this.state.currCol];
                    prevStartNode.isStart = false;
                    document.getElementById(`node-${this.state.currRow}-${this.state.currCol}`).className = 'node';
    
                    this.setState({currRow: row, currCol: col});
                    const currStartNode = this.state.grid[row][col];
                    currStartNode.isStart = true;
                    document.getElementById(`node-${row}-${col}`).className = 'node node-start';
                }
                this.setState({START_NODE_ROW: row, START_NODE_COL: col});
            }

            else if (this.state.isFinishNode) {
                if (nodeClassName !== 'node node-wall') {
                    const prevFinishNode = this.state.grid[this.state.currRow][this.state.currCol];
                    prevFinishNode.isFinish = false;
                    document.getElementById(`node-${this.state.currRow}-${this.state.currCol}`).className = 'node';
    
                    this.setState({currRow: row, currCol: col});
                    const currFinishNode = this.state.grid[row][col];
                    currFinishNode.isFinish = true;
                    document.getElementById(`node-${row}-${col}`).className = 'node node-finish';
              }

                this.setState({FINISH_NODE_ROW: row, FINISH_NODE_COL: col});
            } 
            
            else if (this.state.isWallNode) {
                const newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
                this.setState({grid: newGrid});
                }
            }
        }
    }
    
    getNewGridWithWallToggled (grid, row, col) {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        if (!node.isStart && !node.isFinish && node.isNode) {
            const newNode = {
                ...node,
                isWall: !node.isWall,
            }
            newGrid[row][col] = newNode;
        }
        return newGrid;
    }
  
    handleMouseUp(row, col) {
        if (!this.state.isVisualizing) {
            this.setState({mouseIsPressed: false});
            if (this.state.isStartNode) {
                const isStartNode = !this.state.isStartNode;
                this.setState({isStartNode, START_NODE_ROW: row, START_NODE_COL: col});
            } 
            else if (this.state.isFinishNode) {
                const isFinishNode = !this.state.isFinishNode;
                this.setState({
                isFinishNode,
                FINISH_NODE_ROW: row,
                FINISH_NODE_COL: col,
                });
            }
            this.initializeGrid();
        }
    }
    
    handleMouseLeave() {
        if (this.state.isStartNode) {
            const isStartNode = !this.state.isStartNode;
            this.setState({isStartNode, mouseIsPressed: false});
        } else if (this.state.isFinishNode) {
            const isFinishNode = !this.state.isFinishNode;
            this.setState({isFinishNode, mouseIsPressed: false});
        } else if (this.state.isWallNode) {
            const isWallNode = !this.state.isWallNode;
            this.setState({isWallNode, mouseIsPressed: false});
            this.initializeGrid();
        }
    }

    // only clears from previous run
    clearVisualizer() {
        if (!this.state.isVisualizing) {
            const newGrid = this.state.grid.slice();
            for (const row of newGrid) {
                for (const node of row) {
                    let nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
                    if (
                        nodeClassName !== 'node node-start' &&
                        nodeClassName !== 'node node-finish' &&
                        nodeClassName !== 'node node-wall'
                    ) {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node';
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode =
                            Math.abs(this.state.FINISH_NODE_ROW - node.row) +
                            Math.abs(this.state.FINISH_NODE_COL - node.col);
                    }
                    if (nodeClassName === 'node node-finish') {
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode = 0;
                    }
                    if (nodeClassName === 'node node-start') {
                        node.isVisited = false;
                        node.distance = Infinity;
                        node.distanceToFinishNode =
                            Math.abs(this.state.FINISH_NODE_ROW - node.row) +
                            Math.abs(this.state.FINISH_NODE_COL - node.col);
                        node.isStart = true;
                        node.isWall = false;
                        node.previousNode = null;
                        node.isNode = true;
                    }
                }
            }
        }
    }
    
    // only clears walls
    clearWalls() {
        if (!this.state.isVisualizing) {
            const newGrid = this.state.grid.slice();
            for (const row of newGrid) {
                for (const node of row) {
                    let nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
                    if (nodeClassName === 'node node-wall') {
                        document.getElementById(`node-${node.row}-${node.col}`).className = 'node';
                        node.isWall = false;
                    }
                }
            }
        }
    }
    
    visualize(algorithm) {
        if (!this.state.isVisualizing) {
            this.clearVisualizer();
            this.toggleIsVisualizing();
            const grid = this.state.grid;

            const startNode =
                grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
            const finishNode =
                grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
            let visitedNodesInOrder;

            switch (algorithm) {
                case 'Dijkstra':
                    visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
                break;
                case 'AStar':
                    visitedNodesInOrder = AStar(grid, startNode, finishNode);
                break;
                case 'BFS':
                    visitedNodesInOrder = bfs(grid, startNode, finishNode);
                break;
                case 'DFS':
                    visitedNodesInOrder = dfs(grid, startNode, finishNode);
                break;
                default:
                // should never get here
                break;
            }

            const nodesInShortestPathOrder = this.getNodesInShortestPathOrder(finishNode);
            nodesInShortestPathOrder.push('end');
            this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
        }
    }
    
    animate(visitedNodesInOrder, nodesInShortestPathOrder) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    this.animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }

            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
                if (
                    nodeClassName !== 'node node-start' &&
                    nodeClassName !== 'node node-finish'
                ) {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
                }
            }, 10 * i);
        }
    }
    
    animateShortestPath(nodesInShortestPathOrder) {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            if (nodesInShortestPathOrder[i] === 'end') {
                setTimeout(() => {
                    this.toggleIsVisualizing();
                }, i * 50);
            } else {
                setTimeout(() => {
                    const node = nodesInShortestPathOrder[i];
                    const nodeClassName = document.getElementById(`node-${node.row}-${node.col}`).className;
                    if (
                        nodeClassName !== 'node node-start' &&
                        nodeClassName !== 'node node-finish'
                    ) {
                        document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
                    }
                }, i * 40);
            }
        }
    }

    getNodesInShortestPathOrder(finishNode) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
            nodesInShortestPathOrder.unshift(currentNode);
            currentNode = currentNode.previousNode;
        }
      return nodesInShortestPathOrder;
    }
    
    render() {
        const grid = this.state.grid
        const mouseIsPressed = this.state.mouseIsPressed;
        return (
        <div className="visualizerContainer">
            <div className="buttonContainer">
                <button
                type="button"
                className=""
                onClick={() => this.clearVisualizer()}>
                    Clear Grid
                </button>

                <button
                type="button"
                className=""
                onClick={() => this.clearWalls()}>
                    Clear Walls
                </button>

                <button
                type="button"
                className=""
                onClick={() => this.visualize('Dijkstra')}>
                    Dijkstra's
                </button>

                <button
                type="button"
                className=""
                onClick={() => this.visualize('AStar')}>
                    A*
                </button>

                <button
                type="button"
                className=""
                onClick={() => this.visualize('BFS')}>
                    Bread First Search
                </button>

                <button
                type="button"
                className=""
                onClick={() => this.visualize('DFS')}>
                    Depth First Search
                </button>
            </div>
            <div
            className="grid-container"
            onMouseLeave={() => this.handleMouseLeave()}>
            <div className="grid">

                {grid.map((row, rowIdx) => {
                return (

                    <div key={rowIdx} className="row">
                    {row.map((node, nodeIdx) => {
                        const row = node.row;
                        const col = node.col;
                        const isFinish = node.isFinish;
                        const isStart = node.isStart;
                        const isWall = node.isWall;
                        return (
                        <Node
                            key={nodeIdx}
                            col={col}
                            isFinish={isFinish}
                            isStart={isStart}
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row, col) =>
                            this.handleMouseDown(row, col)
                            }
                            onMouseEnter={(row, col) =>
                            this.handleMouseEnter(row, col)
                            }
                            onMouseUp={() => this.handleMouseUp(row, col)}
                            row={row}></Node>
                        );
                    })}
                    </div>
                );
                })}
            </div>
            </div>

        </div>
        );
    }

}