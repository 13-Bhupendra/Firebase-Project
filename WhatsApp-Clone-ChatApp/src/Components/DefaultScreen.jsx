import React from 'react';
import defaultMessage from "../assets/defaultMessage.png";

const DefaultScreen = () => {
  return (
    <div className='chatAppMainContainer d-flex flex-column justify-content-center align-items-center'>
      <div className="message text-center">
        <img src={defaultMessage} alt="Default Message" className="mb-3" style={{ maxWidth: "200px" }} />
        <h1 className="mb-2">WhatsApp on Web</h1>
        <p className="text-muted">Grow, organize and manage your WhatsApp</p>
      </div>
    </div>
  );
};

export default DefaultScreen;
