import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUsersData } from '../Slices/usersSlices'

const SignUpForm = () => {

    const nameRef = useRef("")
    const emailRef = useRef("")
    const PasswordRef = useRef("")

    const dispatch = useDispatch()
    const {currentUser , users} = useSelector((state)=> state.users)

    const handleSignUp = ()=> {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = PasswordRef.current.value;
        dispatch(addNewUsersData({name,email,password}))
    }

  return (
    <div>
        <input type="text" placeholder='Name' ref={nameRef}/>
        <input type="email" placeholder='Email'  ref={emailRef}/>
        <input type="password" placeholder='Password'  ref={PasswordRef}/>
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default SignUpForm
