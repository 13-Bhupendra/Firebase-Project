import React, { useEffect, useRef } from 'react'
import { signInUser } from '../Slices/usersSlices'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SignInForm = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")

const navigate = useNavigate()
  const dispatch = useDispatch()
  const { users , isLoading, error , currentUser } = useSelector((state) => state.users)

  const handlSignIn =  () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    dispatch(signInUser({ email, password }))
    }

    useEffect(() => {
    if (currentUser?.email) {
      navigate("/home", { replace: true }); 
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <h1>Sign In Page</h1>
      <input type="email" ref={emailRef} placeholder="email" />
      <input type="password" ref={passwordRef} placeholder="password" />
      <button onClick={handlSignIn}>Sign In</button>
     
    {isLoading && <h2>Loading...</h2>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    {/* {currentUser?.email && <h3>Welcome {currentUser.email}</h3>} */}
    </div>
  )
}

export default SignInForm
