import React from 'react'

export default function Sqaures(props){
    return (
    <div className="djContainer">
        
            <div style={props.style0} className='square1'></div>
            <div style={props.style1} className='square2'></div>
            <div style={props.style2} className='square3'></div>
            <div style={props.style3} className='square4'></div>
        
    </div>
    )
}