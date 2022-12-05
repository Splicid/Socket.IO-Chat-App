import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import io from 'socket.io-client'
import { useEffect } from 'react'
const socket = io.connect("http://localhost:5000")
function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, SetmessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("Send_message", {message})
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      SetmessageReceived(data.message);
    })
  }, [socket])

  return (
    <div>
      <input placeholder='Message...' onChange={(event) => {
        setMessage(event.target.value);
      }} />
      <button onClick={sendMessage}> Send Message </button>
      <h1>{messageReceived}</h1>
    </div>
  )
}

export default App
