import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'
import {clearCurrentUser , fetchUserData} from '../Slices/usersSlices'
import "../style/home.css"
import Sidebar from '../Components/Sidebar'
import UserCards from '../Components/UserCards'

const Home = () => {


  return (
    <div className='chatRoomMainContainer'>
      <Sidebar />
      <UserCards />
      {/* <h2>Welcome {currentUser?.email || "Guest"}</h2>
      {
            users.map((e)=><h1>{e.email}</h1>)
            } */}
    </div>
  )
}

export default Home
