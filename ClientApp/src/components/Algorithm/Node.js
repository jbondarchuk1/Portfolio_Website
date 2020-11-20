import React, { Component, useState, useEffect } from 'react';
import './Node.css';

const Node = (props) => {
    const classes =  props.isEnd==true ? "node-end": props.isWall==true ? "isWall" : props.isStart==true ? "node-start" : "";

    return ( 
        <div className={`node ${classes}`} id={`node-${props.row}-${props.col}`}>

        </div>
        
    )
}
export default Node;