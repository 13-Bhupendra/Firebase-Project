import React from 'react'
import SignUpForm from '../Components/SignUpForm'
import "../style/auth.css"
import  Navbar  from '../Components/Navbar'


const SignUp = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      <SignUpForm />
    </div>
  )
}

export default SignUp
