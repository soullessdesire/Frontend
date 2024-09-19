import { Paperclip, Smile, Mic } from "lucide-react";
import { useState } from "react";
import "./User.css";
import EmojiPicker from "emoji-picker-react";

const Chats = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const onEmojiClick = (_, emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };
  return (
    <div
      style={{
        height: "calc(100vh - 80px)",
        position: "relative",
        width: "100%",
      }}
    >
      <div className="chat-background"></div>
      <div className="chatdiv-wrapper">
        <div className="chatdiv">
          <button className="attachment">
            <Paperclip strokeWidth={1} color="#3da33d" />
          </button>
          <textarea
            className="chatinput"
            placeholder="Type you message here....."
            value={message}
          />
          <button className="emoji" onClick={() => setShow((prev) => !prev)}>
            <Smile strokeWidth={1} color="#3da33d" />
            {show && (
              <EmojiPicker
                onEmojiClick={onEmojiClick}
                style={{
                  position: "absolute",
                  bottom: "120%",
                  right: 0,
                }}
              />
            )}
          </button>
          <button className="voice">
            <Mic strokeWidth={1} color="#3da33d" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
