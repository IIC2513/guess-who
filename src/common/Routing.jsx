import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import UserWelcome from '../profile/UserWelcome'

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}/>
                <Route path={"/instructions"} element={<Instructions />}/>
                <Route path={"/welcome"} element={<UserWelcome />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;