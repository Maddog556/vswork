import React from "react";


export default function BlogPost(props){

return(
    <div className="blogpost">
        <a className="postTile-link" href=""><h2 className="postTitle">{props.title}</h2></a>
        <p className="subTitle">{props.subTitle}
       <p className="p-author-date">Published By <a className="author-link" href=''>{props.author} </a>
        on {props.date}</p>
        </p>
        <hr />
    </div>
)
}