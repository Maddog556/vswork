import React from 'react'
import Card from './Card'

export default function CardList(props) {
    const{data} = props
    console.log("this is data",data)
    const names = (
    data?.map((item,index) =>{
        return <Card props = {item} key={index}/>
    })
)
    return (
        <div>
            {names}
        </div>
    )
}

