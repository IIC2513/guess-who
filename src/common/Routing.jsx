import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from '../game/Instructions'
import Board from '../game/Board'
import UserWelcome from '../profile/UserWelcome'
import Login from '../profile/Login'
import Signup from '../profile/Signup'
import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'
import LogoutButton from '../profile/Logout'

function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/instructions"} element={<Instructions />}/>
        <Route path={"/welcome"} element={<UserWelcome />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/signup"} element={<Signup />}/>
        <Route path={"/board"} element={<Board />}/>
        <Route path={"/admincheck"} element={<AdminCheck />}/>
        <Route path={"/usercheck"} element={<UserCheck />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
