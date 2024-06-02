import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSelectChat from 'hooks/useSelectChat';
import useSendMessage from 'hooks/useSendMessage';
import useMessages from 'hooks/useMessages';
import './index.css';

const ChatComponent = () => {
  const { uid } = useParams();
  const { user } = useSelectChat(uid)
  const { text,
    handleSend,
    setImg,
    setText } = useSendMessage()
  const { messages } = useMessages()

  return (
    <div>
      <header className="header">
        <h2 className="title">Զրույց հոգեբանի հետ</h2>
      </header>

      <div id="chat">
        <ul id="messages">
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>


          <div id="message-form-container">
            <input
              id="message-input"
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button onClick={handleSend} id="message-btn" type="submit">Ուղարկել</button>
          </div>

      </div>
    </div>
  );
};

export default ChatComponent;