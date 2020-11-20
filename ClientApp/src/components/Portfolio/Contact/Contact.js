import React, { useEffect, useState } from 'react';
import Layout from '../Home/Header/Layout';
import Footer from '../Home/Footer';
import './Contact.css';

function Contact () {

    const layoutBody = () => {
        return (
        <div className='contact'>
            <div className="login-box">
            <h2>CONTACT</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Email address</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label>Subject</label>
                </div>
                <div className="user-box">
                    <textarea rows="4" cols="40"></textarea>
                    <label>Message</label>
                </div>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
            </div>
        </div>
        )
    }
    return(
        <div>
            <Layout children={layoutBody}/>
        </div>
    )
}

export default Contact;