import React from "react";
import NavBar from "./Navbar";
import './About.css'

function About(){
   
    return(
        <div className="About-wrapper">
            <NavBar/>
            <div className="about">    
                <h1 className="about-title">FunnyFlix</h1>
                <p className="P1">FunnyFlix was founded in 2010 by two college friends, Sarah and Tom, who shared a love for comedy films and television shows. 
                    They noticed that while there were many streaming platforms available, there was no dedicated platform for comedy content.
                    Sarah and Tom decided to fill this gap in the market and create a streaming service that offered exclusively comedy content. 
                    They spent months researching the market and developing a business plan, which they pitched to investors.
                    With the support of their investors, Sarah and Tom launched FunnyFlix in 2012.
                    </p>
                <p className="P2"> initially offering a limited selection of films and shows. They gradually expanded their library and introduced original content, 
                    such as stand-up comedy specials and sketch shows.
                    As FunnyFlix grew in popularity, it faced competition from larger streaming services that also offered comedy content. To stay ahead of the game, 
                    Sarah and Tom focused on providing a personalized user experience, with customized recommendations based on viewing history and user preferences.
                    Today, FunnyFlix is a leading streaming platform for comedy content, with millions of subscribers worldwide.
                    Sarah and Tom continue to oversee the company's operations and are committed to bringing laughter and joy to audiences around the world.</p>
                <p className="P3">Which gave us the idea of making this website for all to enjoy and get all of the inofmation in on place.</p>
                <h2 className="Thank-you">We hope that you love the product that we have made for you and Thank You.</h2>
                    <div className="contact">
                        <p>Contact infomation</p>
                        <p> Email: FunnyFlix@Gmail.com</p>
                        <p> Phone: 555-555-5555</p>
                    </div>
            </div>
        </div>
    )
}

export default About