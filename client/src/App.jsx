import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import io from 'socket.io-client'
import { useEffect } from 'react'


const socket = io.connect("http://localhost:5000")
function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, SetmessageReceived] = useState("");
  const [username, setUsername] = useState([{  }]);
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (message !== "" ){
      const messageData = {
        author: username,
        message: message,
        time: 
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("Send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      SetmessageReceived("");
      console.log(messageData)
    }
  }

  // const sendMessage = () => {
  //   socket.emit("Send_message", {message})
  // }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    })
  }, [socket])

  return (
    <div>
      <input placeholder='Username...' onChange={(event) => {
        setUsername(event.target.value);
      }} />
      <input placeholder='Message...' onChange={(event) => {
        setMessage(event.target.value);
      }} />
      <button onClick={sendMessage}> Send Message </button>
      {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default App
