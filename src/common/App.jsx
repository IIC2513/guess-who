import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoutButton from '../profile/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + HMR + TEST</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href='/welcome'>Ir a User Welcome</a>
      <a href='/instructions'>Ir a Instructions</a>
      <a href='/board'>Ir a Jugar</a>
      <a href='/login'>Login</a>
      <a href='/signup'>Registro</a>
      <a href='/admincheck'>Chequeo Scope Admin</a>
      <a href='/usercheck'>Chequeo Scope User</a>
      <br></br>
      <LogoutButton></LogoutButton>
    </div>
  )
}

export default App
