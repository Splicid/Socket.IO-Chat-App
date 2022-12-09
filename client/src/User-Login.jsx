import {Link, Route, Routes} from 'react-router-dom'
import Frontpage from './Frontpage'
import App from './App'

const userLogin = () => {
    return(
    <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/App" element={<App />} />
    </Routes>
    )
}

export default userLogin;