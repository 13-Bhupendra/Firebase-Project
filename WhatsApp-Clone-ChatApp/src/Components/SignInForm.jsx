import React, { useEffect, useRef } from 'react'
import { signInUser } from '../Slices/usersSlices'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaLock } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { toast } from 'react-toastify';


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
    toast.success("Login Successful !")
  }

  useEffect(() => {
    if (currentUser?.email) {
      toast.success("Login Successful !")
      navigate("/home")
    }
  }, [currentUser, navigate])

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 form-card text-center">
        <h3 className="mb-4">Sign In</h3>
        <div className="mb-3">
          <input type="email" className="form-control" ref={emailRef} placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" ref={passwordRef} placeholder="Password" />
        </div>
        <button className="btn btn-success w-100 mb-2" onClick={handlSignIn}>Sign In</button>
     
        {isLoading && <p className='text-danger'>Loading...</p>} 
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* {currentUser?.email && <h3>Welcome {currentUser.email}</h3>} */}
      </div>

      <div className="extra-info text-center mt-3 w-100">
        <h6>
          Don’t have a WhatsApp account?{" "}
          <span className="signin-link" onClick={()=>navigate("/signup")}>
            Get Started <FaArrowUpRightFromSquare />
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

export default SignInForm
