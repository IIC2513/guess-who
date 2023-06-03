import Card from './Card'
import './Board.css'
import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();
  const [cards, setCards] = useState({});
  const [playerName, setPlayerName] = useState("");

  // Hacemos la request inicial en el primer render
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/boards/boardData`)
      .then((response) => {
        const data = response.data[0];

        const characters = {};
        data.Characters.map((character) => {
          characters[character.id] = character;
        });
        setCards(characters);
        setPlayerName(data.Player.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const toggleCharacter = (id) => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/characters/toggle/${id}`)
      .then((response) => {
        const characters = {...cards};
        characters[id] = response.data;

        setCards(characters);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const opponentSelectionId = 3;

  useEffect(() => {
    if (guess === opponentSelectionId) {
      alert('Adivinaste correctamente!');
      setGuess(null);
    } else if (typeof guess === 'number') {
      alert("No adivinaste uwu");
      setGuess(null);
    }
  }, [guess])

  return (
    <GameContext.Provider
      value={{
        guess,
        setGuess
      }}
    >
      <h1 className="title">Tablero de {playerName}</h1>
      <div className="board">
         <div className="board-row">
            {Object.values(cards).map(card => 
              (
                <Card key={card.id}
                  imgSrc={card.image}
                  id={card.id}
                  shown={!card.oculto}
                  toggle={toggleCharacter}
                />
              )
            )}
        </div>
      </div>
    </GameContext.Provider>
  )
}
