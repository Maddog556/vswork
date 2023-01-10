import React from "react";


export default function BlogPost(props){

return(
    <div className="blogpost">
        <h2>{props.title}</h2>
        <p>{props.subTitle}
        <a href=''>{props.author}</a>
        {props.date}
        </p>
    </div>
)
}