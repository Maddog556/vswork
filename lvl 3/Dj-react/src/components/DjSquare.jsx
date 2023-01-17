import React from "react";
import Buttons from "./Buttons";
import Sqaures from "./Squares";


export default function Square(){
    
    const [color, setColor] = React.useState(
        ["white","white","white","white"]
    )
  
    
    function djSmall(){
        if (color[0] === "white"){
            setColor(["black","black","white","black"])
        } else if (color[0] !=="white"){
            setColor(["white","white","black","white"])
        }
    }
    function partyDj(){
        setColor(["purple","purple",color,color])
    }
    function leftBlue(){
        setColor([color,color,"blue",color])
    }
     function rightBlue(){
        setColor([color,color,color,"blue"])
    }
    function bigDJ1(){
        setColor(["yellow",color,color,color])
    }
    function bigDJ2(){
        setColor([color,"",color,color])
    }
    function bigDJ3(){
        setColor([color,color,"",color])
    }
    function bigDJ4(){
        setColor([color,color,color,""])
    }
    function makeNoise(){
        setColor(["white","black","white","black"]) && setColor(["black","white","black","white"])
    }

    return(
    <div>
        <Sqaures 
        style0={{backgroundColor: color[0]}}style1={{backgroundColor: color[1]}} 
        style2={{backgroundColor: color[2]}} style3={{backgroundColor: color[3]}}
        />
        <Buttons djSmall={djSmall} partydj={partyDj} 
                leftblue={leftBlue} rightblue={rightBlue}
                bigdj1={bigDJ1}bigdj2={bigDJ2}
                bigdj3={bigDJ3}bigdj4={bigDJ4}
                makeNoise={makeNoise}/>
    </div>
    )
}