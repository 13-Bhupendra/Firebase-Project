import React from 'react';
import { IoIosSend } from "react-icons/io";
import ChatroomScreenNav from './ChatroomScreenNav';
import "../style/chatroomScreen.css";

const ChatroomScreen = ({ userName }) => {
  // Fake chat messages for demo
  const fakeMessages = [
    { sender: "other", text: `Hey ${userName}! How are you?` },
    { sender: "me", text: "I'm good, thanks! How about you?" },
    { sender: "other", text: "Doing well, just working on a project." }
  ];

  return (
    <div className='chatAppMainContainer d-flex justify-content-center align-items-center'>
      <div className="userOneDisplay d-flex flex-column">
        {/* Navbar shows selected user */}
        <ChatroomScreenNav name={userName} />

        {/* Messages display */}
        <div className="messagesContainer flex-grow-1 px-3 py-2">
          {fakeMessages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "me" ? "messagesRight" : "messagesLeft"}
            >
              <h6>{msg.text}</h6>
            </div>
          ))}
        </div>

        {/* Input field at bottom */}
        <div className="inputField mt-auto">
          <input type="text" placeholder='Message' />
          <button><IoIosSend /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatroomScreen;
