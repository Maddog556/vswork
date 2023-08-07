import React, { useContext } from "react"
import Posts from "./Posts"
import { UserContext } from "../context/UserProvider"


function UserPostList(){

    const {posts} = useContext(UserContext)
    // sort post from mosted liked to least
    function sortPosts(a, b){
        if( a.likedUsers.length === b.likedUsers.length ){
            return 0
        } else if (a.likedUsers.length > b.likedUsers.length){
            return -1
        } else {return 1}
    }

    posts.sort(sortPosts)


    const postList = posts?.map(post => {
         return <Posts 
        {...post} 
        key = {post._id}
        />
    })
    
    return(
        <div>
            {postList}
        </div>
    )
}

export default UserPostList