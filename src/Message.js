import React from "react";

const Message = ({ message, id, hour, minute, myId, index }) => {
  return (
    <div
      className={`message ${id === myId ? "message_self" : "message_other"}`}
    >
      <p>
        {message}
        <span>
          {hour}:{minute}
        </span>
      </p>
    </div>
  );
};

export default Message;
