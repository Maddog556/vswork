import React from 'react'
import BlogPost from '../components2/BlogPost'
import Blogdata from '../components2/Blogdata'



export default function BlogList() {
    const post = Blogdata.map( (item,index) =>{
        return(

            <BlogPost
                    key = {index}
                    title = {item.title}
                    subTitle = {item.subTitle}
                    author = {item.author}
                    date ={item.date}
                    />
        )
    })
    return (
        <div className="">

            {post} 
            
        </div>
    )
};
