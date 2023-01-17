import React from "react";
import Memesdata from "../Memesdata";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(Memesdata)

    function handleClick(){
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
    }))
    
}
    return(
        <div>
            <div className="form">
                <input type="text" 
                placeholder="Top Text" 
                className="form-input">
                </input>

                <input type="text"
                placeholder="Bottom Text"
                className="form-input">
                </input>
                <button onClick={handleClick} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </div>
    )
}