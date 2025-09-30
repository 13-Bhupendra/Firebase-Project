import React from 'react'
import SignInForm from '../Components/SignInForm'
import "../style/auth.css"
import  Navbar  from '../Components/Navbar'

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <SignInForm />
    </div>
  )
}

export default SignIn
