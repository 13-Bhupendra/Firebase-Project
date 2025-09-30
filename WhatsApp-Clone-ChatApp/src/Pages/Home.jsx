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
  

  return (
    <div>

      <h2>Welcome {currentUser?.email || "Guest"}</h2>
      {
            users.map((e)=><h1>{e.email}</h1>)
            }
    </div>
  )
}

export default Home
