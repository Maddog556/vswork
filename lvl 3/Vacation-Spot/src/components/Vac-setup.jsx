import React from "react";


export default function VacSetup(props){
    
    let cardColor
    //changes the color of the card based on the seasons
    if(props.timeToGo === "Spring"){
      cardColor = '#FCF9D9'
    }else if(props.timeToGo === 'Summer'){
      cardColor = "#D394B6"
    }else if(props.timeToGo === 'Winter'){
      cardColor = '#7492B9'
    }else if(props.timeToGo === 'Fall'){
      cardColor = '#687A0E'
    }

    let dollar 
    //Changes dollar signs based on price
    if(props.price <= 500){
      dollar = '$'
    }else if(props.price > 500 && props.price <= 1000){
      dollar = '$$'
    }else if(props.price > 1000){
      dollar = '$$$'
    }

return(
    <div className="vacSetup" style={{background: cardColor,opacity:0.8}}>
        
        <h1 className="placeName">{props.place}</h1> 
        <h3 className='price'>Price:{dollar}{props.price}</h3>
        <h2 className="timeToGo">{props.timeToGo}</h2>  
       
    </div>
)
}
  