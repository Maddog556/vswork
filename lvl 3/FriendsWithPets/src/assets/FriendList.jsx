import React from 'react'
import FriendSetup from './FriendSetup'
import friendData from './friendData'



export default function card() {

    const pets = friendData.map( (item,index) =>{
        return(

            <FriendSetup
                    key = {index}
                    props = {item}
                    />
        )
    })
    return (
        <div className="">

        {pets} 
            
        </div>
    )
};