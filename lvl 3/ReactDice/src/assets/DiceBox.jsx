import React from 'react'

export default function DiceBox(){


const randomNum = Math.floor(Math.random() * 6)
const randomNum1 = Math.floor(Math.random() * 6)
const randomNum2 = Math.floor(Math.random() * 6)
const randomNum3 = Math.floor(Math.random() * 6)
const randomNum4 = Math.floor(Math.random() * 6)
const [number, setNumber] = React.useState([1,2,3,4,5,6])

function newNumbers(){
    setNumber([randomNum,randomNum1,randomNum2,randomNum3,randomNum4])
}


return(
    <div className='mainBox'>
        <div className='dicebox'>
            <h1 className='title'>These are you numbers...</h1>
            <div className='numberDice'>
            <h2 className='Number0'> {number[0]} </h2>
            <h2 className='Number1'> {number[1]} </h2>
            <h2 className='Number2'> {number[2]} </h2>
            <h2 className='Number3'> {number[3]} </h2>
            <h2 className='Number4'> {number[4]} </h2>
            </div>
        </div>
        <button className='diceBtn' onClick={newNumbers}>Roll Dice</button>
        </div>
    )
}