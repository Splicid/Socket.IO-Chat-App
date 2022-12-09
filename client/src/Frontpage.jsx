import './style/main_page.css'
import { useState } from 'react'
import io from 'socket.io-client'
import {Link, Route, Routes} from 'react-router-dom'
import App from './App'


const socket = io.connect("http://localhost:5000")
const main_page = () => {
    const [username, setUsername] = useState([""]);

    const sendMessage = async () => {
        await socket.emit("send_username", username);
    }
    return(
        <div className='main'>
            <div className='form'>
            <input className='userInput' placeholder='Username...' onChange={(event) => {
                setUsername(event.target.value);
            }} />
            <Link to="/App">
                <button className='userButton' disabled={username == ""} onClick={sendMessage}> Enter Chat</button>
            </Link>           
            </div>
        </div>
    )
}

export default main_page;