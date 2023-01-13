import React from "react";

export default  function Pets({props}){

    return(
        <div className="petSetup">
            <h1 className="petName">Pet name: {props.name}</h1>
            <h1 className="petBreed">Pet Breed: {props.breed}</h1>
        </div>
    )

}