import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import messageService from "../services/messages";
import "../../chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    messageService.getAll().then((response) => {
      console.log("response", response);
      setMessages(response.data);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {messages.length > 0 && (
        <div>
          <h3 className="name">Ranger Lee</h3>
          <h4 className="active">Active 3 mins ago</h4>
          <div className="msg-container">
            <div className="time time-1">{messages[0].id}</div>
            <div className="first-msg">{messages[0].content.slice(7)}</div>
            <div className="time">{messages[1].time}</div>
            <div className="second-msg">{messages[1].content.slice(7)}</div>
            <div className="message-bar">
              <input
                className="message-input"
                type="text"
                placeholder="   Message..."
              />
            </div>
          </div>
        </div>
      )}
      <Navbar />
    </>
  );
};

export default Chat;
