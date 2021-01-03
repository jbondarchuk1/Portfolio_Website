import React, { useEffect, useState } from 'react';
import Layout from '../Home/Header/Layout';
import './Resume.css';

function Resume () {
    const layoutBody = () => {
        return(
        <div div className='resumeWrapper'>
            <div className='resume'>
                <div className='iframeWrapper'>
                    <h1>RESUME</h1>
                    <iframe src="https://drive.google.com/file/d/1nhWMikE1QRoRPn768r-GNfL2kIg79Gn7/preview" width="640" height="820"></iframe>
                </div>
            </div>
        </div>
    )
    }

    return( 
    <div div className='resumeWrapper'>
        {/* <Layout children={layoutBody} /> */}
        <div className='resume'>
            <div className='iframeWrapper'>
                <h1>RESUME</h1>
                <iframe src="https://drive.google.com/file/d/1rSab_Svs2WPw4Gpg64bSGizcavDhDe5B/preview" width="640" height="820"></iframe>
            </div>
        </div>
    </div>
    )
}

export default Resume;