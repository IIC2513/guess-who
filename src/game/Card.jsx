import './Card.css'
import {useContext, useState} from 'react'
import CardButton from './CardButton'
import {GameContext} from "./Board.jsx";

export default function Card({id, imgSrc, shown, toggle}){
  const {
    setGuess
  } = useContext(GameContext);

  const handleGuess = () => {
    setGuess(id);
  }

  return(
    <div className="card">
      <div className="card-container">
        {shown && <img src={imgSrc} className="img" alt="avatar"/>}
      </div>
      <div className="card-actions">
        <CardButton onClick={() => toggle(id)} label={shown ? "Ocultar" : "Mostrar"}/>
        {shown && <CardButton onClick={handleGuess} label={"Adivinar"}/>}
      </div>
    </div>
  )
}
