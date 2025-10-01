import React from 'react'
import SignUpForm from '../Components/SignUpForm'
import "../style/auth.css"
import AuthNavbar from '../Components/AuthNavbar'


const SignUp = () => {
  return (
    <div className='mainContainer'>
      <AuthNavbar />
      <SignUpForm />
    </div>
  )
}

export default SignUp
