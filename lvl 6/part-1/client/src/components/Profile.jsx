import React,{useEffect,useContext} from 'react'
import {UserContext} from '../context/UserProvider'




function Profile() {


  const { user: {
    username,
    _id
  },
    addIssue,
    upVote,
    downVote,
    issueList,
    deleteIssue,
    deleteComment,
    setPage,
    page,
    userErr,
    setUserErr,
    sortByVotes
  } = useContext(UserContext)
  
  
  useEffect(() => {
    setPage('profile')
  },[])
  

  return (
    <div>Profile</div>
  )
}

export default Profile