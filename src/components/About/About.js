import React, { Component } from 'react';

import "./About.css"

const About = () => {
    return (
        <div className="about about-container">
            <h2 className="about about-header-main vt-font">Budget Buddy</h2>
            <h3 className="about about-header-sub vt-font">A Web App by Mackenzie</h3><br />
            <div className="about-text-container">
                <p className="about about-text pt-sans-font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanks for visiting my site! To learn more about me or any other of my side projects, you can visit my portfolio <a className="link" href="www.clarkmackenzieb.com">here</a> or visit my linked in <a className="link" href="https://www.linkedin.com/in/clarkmackenzieb/">here.</a></p><br />
                <p className="about about-text pt-sans-font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Budget Buddy started out as my first foray into web apps, using AngularJs. The Budget Buddy you see before you is a rewrite of that first project, using React.</p><br />
                <p className="about about-text pt-sans-font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I chose to create a budgeting app because as a young adult, it can sometimes be difficult to keep up with your finances. Budget Buddy was a simple answer to that, as it allows users to check what percent of their income is expendable, then allows them to create a budget. Users can either use average prices from Dallas, TX, or input their own monthly costs.</p><br />
                <p className="about about-text pt-sans-font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Check out the repository for this project <a className="link" href="https://github.com/clarkmackenzieb/react-finance-website">here!</a></p>
            </div>
            <h1>make a little pixel sprite for this page</h1>
        </div>
    )
}

export default About;