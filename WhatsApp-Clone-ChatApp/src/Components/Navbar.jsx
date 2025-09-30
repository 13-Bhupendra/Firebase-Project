import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='container mt-2 mb-2'>
      <h2 className='fs-3 fw-bold' style={{color:"lightgreen"}}><FaWhatsapp className='me-2 fs-2 '/>WhatsApp</h2>
    </div>
  )
}

export default Navbar
