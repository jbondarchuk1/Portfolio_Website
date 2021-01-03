import React, { useEffect, useState } from 'react';
import Layout from '../Home/Header/Layout';
import './Resume.css';

function Resume () {
    return( 
    <div div className='resumeWrapper'>
        <div className='resume'>
            <div className='iframeWrapper'>
                <h1>RESUME</h1>
                <iframe src="https://drive.google.com/file/d/1pr8NumqUzFy8dqAA1IHWvflCmehDQtzT/preview" width="640" height="820"></iframe>
            </div>
        </div>
    </div>
    )
}

export default Resume;