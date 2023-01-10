import React from "react"
import airbnb from "../image/airbnb-1.png"

export default function Navbar() {
    return (
        <nav className="navbar--container">
            <img className="nav--logo" src = {airbnb} alt=" airbnblogo" />
        </nav>
    )
};


