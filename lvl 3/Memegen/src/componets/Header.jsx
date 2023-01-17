import React from "react"
import Troll from "../images/Troll-Face.png"
export default function Header() {

    function heandleonMouseOver(){
        console.log("You Been Trolled")
    }

    return (
        <header className="header">
            <img  className="header--image"src= {Troll} onMouseOver={heandleonMouseOver}/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}