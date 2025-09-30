import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUsersData } from '../Slices/usersSlices'
import { createAndAddNewChat } from '../Slices/chatRoomSlice'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

    const nameRef = useRef("")
    const emailRef = useRef("")
    const PasswordRef = useRef("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser , users , isLoading , error} = useSelector((state)=> state.users)

    const handleSignUp = ()=> {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = PasswordRef.current.value;
        dispatch(addNewUsersData({name,email,password}))
    }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 form-card text-center">
        <h3 className="mb-4">Sign Up</h3>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" ref={nameRef}/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" ref={emailRef}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" ref={PasswordRef}/>
        </div>
        <button className="btn btn-success w-100 mb-2" onClick={handleSignUp}>Sign Up</button>
        {isLoading && <p className='text-danger'>Loading...</p>} 
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="extra-info text-center mt-3 w-100">
        <h6>
          Already have an account?{" "}
          <span className="signin-link" onClick={()=>navigate("/signin")}>
            Sign In <FaArrowUpRightFromSquare/>
          </span>
        </h6>
        <p className="text-muted small mt-2">
          <FaLock /> Your personal messages are end-to-end encrypted
        </p>
        <span className="text-secondary small">Terms & Privacy Policy</span>
      </div>
    </div>
  )
}

export default SignUpForm
