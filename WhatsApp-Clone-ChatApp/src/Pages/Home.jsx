import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'
import {clearCurrentUser , fetchUserData} from '../Slices/usersSlices'

const Home = () => {
  const dispatch = useDispatch()
  const {currentUser , users} = useSelector((state)=> state.users)
  const navigate = useNavigate()

  const handleUsersData = ()=>{
    dispatch(fetchUserData())
  }
  useEffect(()=>{
    handleUsersData()
  } , [])

  console.log("users data : " , users  , "current user : " , currentUser)

  // const handleSignOut = async ()=> {
  //   await signOut(auth)
  //   dispatch(clearCurrentUser())
  //   navigate("/" , {replace : true});
  // }

  return (
    <div>
        {/* <h1>Home page</h1>
         <h1>Welcome {currentUser?.email}</h1>
      <button onClick={handleSignOut}>Sign Out</button> */}
      <h2>Welcome {currentUser?.email || "Guest"}</h2>
      {
            users.map((e)=><h1>{e.email}</h1>)
            }
    </div>
  )
}

export default Home
