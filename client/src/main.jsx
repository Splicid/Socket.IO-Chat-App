import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Frontpage from './Frontpage'
import { BrowserRouter} from 'react-router-dom'
import UserLogin from './User-Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    //<App />
    <BrowserRouter>
        <UserLogin />
    </BrowserRouter>
)
