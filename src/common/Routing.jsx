import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import Board from '../game/Board'
import UserWelcome from '../profile/UserWelcome'


function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}/>
                <Route path={"/instructions"} element={<Instructions />}/>
                <Route path={"/welcome"} element={<UserWelcome />}/>
                <Route path={"/board"} element={<Board />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;