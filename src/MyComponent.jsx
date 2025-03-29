/*import "./MyComponent.css";

function MyComponent() {
  return (
    <div className="chat-container">
      <div className="chat-header">Hỏi bất kì điều gì về du lịch</div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Xin chào! Tôi có thể giúp bạn tìm đến địa điểm du lịch nào?"
          className="chat-input"
        />
        <button className="chat-button">🔍</button>
      </div>
    </div>
  );
  }
  
  export default MyComponent;
  */
  import React, { useState } from "react";
  import "./MyComponent.css";
  
  export default function MyComponent() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
  
    const handleSendMessage = () => {
      if (inputText.trim() === "") return;
  
      const newMessage = { text: inputText, type: "user" };
      const botResponse = {
        text: "Đây là câu trả lời tự động cho câu hỏi của bạn.",
        type: "bot",
      };
  
      setMessages([...messages, newMessage, botResponse]);
      setInputText("");
    };
  
    return (
      <div className="chat-container">
        <div className="chat-header">Hỏi bất kì điều gì về du lịch</div>
        <div className="chat-content">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Xin chào! Tôi có thể giúp gì?"
            className="chat-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button className="chat-button" onClick={handleSendMessage}>
            🔍
          </button>
        </div>
      </div>
    );
  }
  