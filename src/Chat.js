import React from "react";
import io from "socket.io-client";
import uuid from "uuid/v4";
import Input from "./Input";
import Message from "./Message";
const myUuid = uuid();
const API_DEV = "localhost:8080/";
const API_PROD = "https://api-chat-ted2370.herokuapp.com/"; //This is my public API for test.

const socket = io(API_DEV); //Change to your URL Chat-Server.
let myId;

const Chat = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

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
            <div key={index}>
              <Message
                message={message}
                id={id}
                hour={hour}
                minute={minute}
                myId={myId}
              />
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite uma mensagem"
          value={message}
          setValue={setMessage}
        />
      </form>
    </section>
  );
};

export default Chat;
