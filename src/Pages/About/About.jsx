import React from 'react'
import Papa from './papa.jpg'
import  './About.css'

function About() {
    return (
        <div className='aboutus'>
            <h1>About us</h1>
            <p>"Changing your openions, keep to your principles;<br/>change your leaves, keep intact your roots."</p>
            <div className="about">
                <div className="info">
                    <h2>Mr Naresh Agrawal</h2>
                    <h5>Founder and CEO</h5>
                </div>
                <div className="img">
                    <img src={Papa} alt="Mr.NARESH"/>
                </div>
            </div>

        </div>
    )
}

export default About
