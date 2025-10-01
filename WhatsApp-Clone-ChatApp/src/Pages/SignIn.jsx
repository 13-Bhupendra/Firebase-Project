import React from 'react'
import SignInForm from '../Components/SignInForm'
import "../style/auth.css"
import AuthNavbar from '../Components/AuthNavbar'

const SignIn = () => {
  return (
    <div className='mainContainer'>
      <AuthNavbar />
      <SignInForm />
    </div>
  )
}

export default SignIn
