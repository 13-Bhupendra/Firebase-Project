import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'
import {clearCurrentUser , fetchUserData} from '../Slices/usersSlices'
import "../style/home.css"
import UserCards from '../Components/UserCards'
import Sidebar from '../Components/Sidebar'

const Home = () => {


  return (
    <div className='chatRoomMainContainer'>
      <Sidebar />
      <UserCards />
    </div>
  )
}

export default Home
