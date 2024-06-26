import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSelectChat from "hooks/useSelectChat";
import useSendMessage from "hooks/useSendMessage";
import useMessages from "hooks/useMessages";
import useChats from "hooks/useChats";
import useUsersList from "hooks/useUsersList";
import PaymentOptions from "components/shared/Payment/PaymentOptions";
import "./index.css";

const ChatComponent = (props) => {
  // const { selectedUser, currentUser, users} = props;
  const { selectedUserUid } = useParams();
  const { currentUser, handleSelect } = useSelectChat();
  const { users } = useUsersList(currentUser);
  const { text, handleSend, setText } = useSendMessage();
  const [selectedUser, setSelectedUser] = useState();
  const { chats, handleSelectChat } = useChats();
  const { messages } = useMessages();

  useEffect(() => {
    if (users.length && selectedUserUid) {
      const activeChatUser = users.find((user) => user?.uid === selectedUserUid);
      handleSelect(activeChatUser);
      handleSelectChat(activeChatUser);
      setSelectedUser(activeChatUser);
    }
  }, [selectedUserUid, users]);

  return (
    <div>
      <header className="header">
        <h2 className="title">
          {currentUser?.role === "psychologist" ?
            "Զրույց պացիենտի հետ" :
            "Զրույց հոգեբանի հետ"
          }
        </h2>
      </header>
      <div className="chat-users-container" style={{ display: "flex" }}>
        <div className="chat-users">
          {users
            ?.filter((user) => currentUser?.payments?.[user?.uid] || (currentUser.role === "psychologist" && user.uid === selectedUserUid))
            .map((item, index) => {
              return (
                <div
                  onClick={() => {
                    handleSelect(item);
                    handleSelectChat(item);
                    setSelectedUser(item);
                  }}
                  className="userCard"
                  style={{
                    backgroundColor:
                      selectedUser?.uid === item?.uid ? "pink" : "",
                  }}
                  key={index}
                >
                  {item.photoURL ? (
                    <img className="photo" src={item.photoURL} alt="profile" />
                  ) : (
                    <div className="name">
                      <span>{item?.displayName?.[0]?.toUpperCase()}</span>
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
            {/* {showPayment && currentUser && currentUser?.role !== "psychologist" && <PaymentOptions currentUser={currentUser} selectedUserUid={selectedUser?.uid} />} */}
            {messages.map((message, index) => {
              const messageOwner =
                message.senderId === currentUser?.uid
                  ? currentUser
                  : selectedUser;
              console.log("***************         ", messageOwner);
              return (
                <li
                  key={index}
                  className="userCard"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 8px",
                    borderRadius: "10px",
                    backgroundColor: `${message?.senderId === currentUser?.uid
                        ? "pink"
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
                      <span>{messageOwner?.displayName?.[0]?.toUpperCase()}</span>
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
                style={{ border: "solid 2px pink" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div>
                <button onClick={handleSend} id="message-btn" type="submit">
                  Ուղարկել
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
