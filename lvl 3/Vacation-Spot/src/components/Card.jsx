import React from 'react'
import VacSetup from './Vac-setup'
import VacData from './Vac-data'



export default function card() {

    const vaca = VacData.map( (item,index) =>{
        return(

            <VacSetup
                    key = {index}
                    place = {item.place}
                    price = {item.price}
                    timeToGo = {item.timeToGo}
                   
                    />
        )
    })
    return (
        <div className="">

        {vaca} 
            
        </div>
    )
};
