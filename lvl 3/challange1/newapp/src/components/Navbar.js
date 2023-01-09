

import React from "react"
import maskedsuit from "../images/masked-suit.jpg"

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img className="picture" src = {maskedsuit} />
        </div>
    )
}