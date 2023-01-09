

import React from "react"


export default function Main() {
    return (
        <div className="Main--container">
            <h3 className="main-heading Main--container">
                Joshua Maddox
            </h3>
            <h4 className="main-h4 Main--container">
                Frontend Developer 
            </h4>
            <p className="main-p Main--container">
                Website Link Channel
            </p>
            <div className="main--btn">
            <button className="main-btn-email">
            <i class="fa-solid fa-envelope"></i> Email
            </button>
            <button className="main-btn-LinkedIn" >
            <a href="https://www.linkedin.com/in/maddoxjosh/">
            <i class="fa-brands fa-linkedin"></i>LinkedIn 
            </a>
            </button>
            </div>
            <div className="main-about-me">
                <h3>About</h3>
                <p>I am a Frontend Developer ready to tackel any problem and furthering my knowlege in the field.
                    I come from a background of working hard from farm work to being a Marine but I have always had a love for computers.
                    Putting my first computer together sparked me into getting more involed and looking for what I wanted to to which lead me here.
                </p>
                <h3>Interests</h3>
                <p>
                    Some of the things I like to do are Music,watching Moives,Food, going to the gym,and Playing games.
                </p>
            </div>

        </div>
    )
}