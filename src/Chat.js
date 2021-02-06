import React from "react";
import io from "socket.io-client";
import uuid from "uuid/v4";
const myUuid = uuid();

//This is my public API for test.
const socket = io("https://api-chat-ted2370.herokuapp.com/"); //Change to your URL Chat-Server.
let myId;

const Chat = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const inputRef = React.useRef();
  const messagesBox = React.useRef();

  React.useEffect(() => {
    myId = window.localStorage.getItem("myid");
    if (!myId) {
      window.localStorage.setItem("myid", myUuid);
      myId = myUuid;
    } else {
      myId = window.localStorage.getItem("myid");
    }
  }, []);

  React.useEffect(() => {
    let messagesStorage = window.localStorage.getItem("messages");
    if (messagesStorage) {
      setMessages(JSON.parse(messagesStorage));
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      messagesBox.current.scrollTo(0, messagesBox.current.scrollHeight);
    });
  }, []);

  React.useEffect(() => {
    inputRef.current.focus();

    socket.on("chat message", (message) => {
      let newMessage = [...messages, message];
      setMessages(newMessage);
      window.localStorage.setItem("messages", JSON.stringify(newMessage));

      if (message.id === myId) {
        messagesBox.current.scrollTo(0, messagesBox.current.scrollHeight);
      }
      socket.off("chat message");
    });
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", {
        id: myId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <section className="container">
      <div className="messages">
        <div className="bg" ref={messagesBox}>
          {messages.map(({ message, id, hour, minute }, index) => (
            <div
              key={index}
              className={`message ${
                id === myId ? "message_self" : "message_other"
              }`}
            >
              <p>
                {message}
                <span>
                  {hour}:{minute}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          ref={inputRef}
        />
      </form>
    </section>
  );
};

export default Chat;
