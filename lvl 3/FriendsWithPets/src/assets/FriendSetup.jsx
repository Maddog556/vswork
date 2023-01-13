
import React from "react";
import Pets from "./Pets"

export default function FriendSetup({props}){
console.log(props)

return(
    <div className="FriendSetup">
        
       <h1 className="customerName">Customer: {props.name}</h1>
       <h1 className="customerAge">Age :{props.age}</h1>

      {props.pets.map((items,index) => {
        return(
            <Pets 
                key = {index}
                props = {items}            
            />
        )
      }
      )}
       
    </div>
)
}