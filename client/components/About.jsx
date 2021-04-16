import React from 'react';
import profile from '../images/profile.jpeg';

const About = () => {
    return (
        <section className="about">
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">About Me</p>
                    <h1 className="about-title">I am Steven Nguyen and I am a <span className="desc-title">Fullstack Web Developer</span></h1>
                    <p className="about-desc">Welcome to my website! My name is Steven and I am a recent graduate from the University of Washington majoring in Neuroscience. I am passionate about building products that simplify peoples' lives. I currently specialize in fullstack web development with languages including JavaScript, React/React Native. Feel free to check out my projects below and I would love to get in touch and chat!</p>
                    <a href="https://stevennguyenresume.s3-us-west-2.amazonaws.com/Steven+Nguyen_Resume.pdf" className="download_resume">Download Resume</a>
                </div>
            </div>
            <div className="right">
                <img className="headshot" src={profile} alt="headshot of Steven Nguyen" loading="lazy" />
            </div>
        </section>
    )
}

export default About;