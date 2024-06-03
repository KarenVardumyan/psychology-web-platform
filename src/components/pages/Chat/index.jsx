import React, { useState } from "react";
import useSelectChat from "hooks/useSelectChat";
import useSendMessage from "hooks/useSendMessage";
import useMessages from "hooks/useMessages";
import useChats from "hooks/useChats";
import useUsersList from "hooks/useUsersList";
import "./index.css";

const ChatComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { currentUser, handleSelect } = useSelectChat();
  const { users } = useUsersList(currentUser);
  const { text, handleSend, setText } = useSendMessage();
  const { chats, handleSelectChat } = useChats();
  const { messages } = useMessages();

  return (
    <div>
      <header className="header">
        <h2 className="title">Զրույց հոգեբանի հետ</h2>
      </header>
      <div className="users">
        {users.map((item, index) => {
          return (
            <div
              onClick={() => {
                handleSelect(item);
                handleSelectChat(item);
                setSelectedUser(item);
              }}
              className="userCard"
              key={index}
            >
              {item.photoURL ? (
                <img className="photo" src={item.photoURL} alt="profile" />
              ) : (
                <div className="name">
                  <span>{item.displayName[0].toUpperCase()}</span>
                </div>
              )}
              <div>
                <span>{item.displayName}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div id="chat">
        <ul id="messages">
          {messages.map((message, index) => {
            const messageOwner =
              message.senderId === currentUser?.uid
                ? currentUser
                : selectedUser;
            return (
              <li
                key={index}
                className="userCard"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "10px",
                  backgroundColor: `${
                    message?.senderId === currentUser?.uid
                      ? "#38ADC1"
                      : "#FFC0CB"
                  }`,
                  margin: "4px",
                }}
              >
                {messageOwner.photoURL ? (
                  <img
                    className="photo"
                    src={messageOwner.photoURL}
                    alt="profile"
                  />
                ) : (
                  <div className="name">
                    <span>{messageOwner.displayName[0].toUpperCase()}</span>
                  </div>
                )}
                <div className="message-header">
                  <span className="message-sender">{message.sender}</span>
                  <span className="message-timestamp">
                    {new Date(message.date * 1000).toLocaleTimeString()}
                  </span>
                </div>
                <div className="message-content">{message.text}</div>
              </li>
            );
          })}
        </ul>
        {selectedUser && (
          <div id="message-form-container">
            <input
              id="message-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSend} id="message-btn" type="submit">
              Ուղարկել
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
