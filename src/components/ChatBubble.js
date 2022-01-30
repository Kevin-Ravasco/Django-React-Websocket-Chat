import React from "react";

export default function ChatBubble({ time, message, sender }) {
  console.log("props >>>", time, message, sender);
  return (
    <>
      <li className="clearfix">
        <div className={`message-data ${sender === "other" && "text-right"}`}>
          <span className="message-data-time">{time}</span>
        </div>
        <div
          className={`message  ${
            sender === "me" ? "my-message" : "other-message float-right"
          }`}
        >
          {message}
        </div>
      </li>
    </>
  );
}
