import React, {useState, useEffect, Component} from 'react';
import axios from 'axios';
import './Contact.css';

function Contact () {
    const [form, setForm] = useState({
        "Name": null,
        "Email address": null,
        "Subject": null,
        "Message": null,
    })


    const handleSubmit = e => {
        var form_data = new FormData();
        e.preventDefault();

        for ( var key in form ) {
            form_data.append(key, form[key]);
            console.log(key)
            console.log(form[key])
        }

        axios({
            method: 'post',
            url: '/Contact', 
            data: form_data,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
            alert("Email Sent! Thank you!")
            document.getElementById("form").reset();
    }

    const handleChange = e => {
        let newForm = form;
        newForm[`${e.target.name}`] = e.target.value;
        setForm(newForm);
    }
    
        return (
        <div className='contact'>
            <div className="login-box">
                <h2>CONTACT</h2>


                <form method='POST' action='/Contact' onSubmit={handleSubmit} Id="form">
                    <div className="user-box">
                        <input type="text" name="Name" required="true" onChange={handleChange} />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="EmailAddress" required="true" onChange={handleChange} />
                        <label>Email address</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="Subject" required="true" onChange={handleChange} />
                        <label>Subject</label>
                    </div>
                    <div className="user-box">
                        <textarea rows="4" cols="40" name="Message" required="true" onChange={handleChange}></textarea>
                        <label>Message</label>
                    </div>
                    <input type='submit' id='a'/>
                </form>
                <h4><br/><br/>MY EMAIL<br/><br/></h4>
                <a href="mailto:jason.r.bondarchuk@gmail.com"><h4>jason.r.bondarchuk@gmail.com</h4></a>
            </div>
        </div>
        )
    }

export default Contact;