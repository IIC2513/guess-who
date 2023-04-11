import Card from './Card'
import './Board.css'
import React, {createContext, useState, useEffect} from "react";

export const GameContext = createContext(null);

export default function Board() {
  const [guess, setGuess] = useState();

  const cards =[
    { id: 1, imgSrc: "https://th.bing.com/th/id/OIP.yUtv47nJhpmN4HSj7DchrwHaHa?pid=ImgDet&rs=1"},
    { id: 2, imgSrc: "https://th.bing.com/th/id/OIP.Y3kTs0IAYGmehcCpCKN34AHaHa?pid=ImgDet&rs=1"},
    { id: 3, imgSrc: "https://media1.popsugar-assets.com/files/thumbor/ORYxVoPD5VU4SKy6HBtCXa4DDv8/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/29/080/n/1922398/25f7f5ec3278d6f1_GettyImages-76370004_master/i/Britney-Spears-Pictures-Over-Years.jpg"},
    { id: 4, imgSrc: "https://redgol.cl/__export/1633270622537/sites/redgol/img/2021/10/03/luli_crop1633270477069.png_1159711837.png"},
    { id: 5, imgSrc: "https://static.mujerhoy.com/www/multimedia/202301/12/media/cortadas/shakira-cambios-look-pelo-kzqD-U190238490989BCD-624x624@MujerHoy.jpg"},
    { id: 6, imgSrc: "https://i0.wp.com/instyle.mx/wp-content/uploads/2022/02/selena.jpg?fit=1200%2C1200&ssl=1"},
  ];

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
      <div className="board">
         <div className="board-row">
            {cards.map(card=> (
                <Card key={card.id} imgSrc={card.imgSrc} id={card.id}/>
            ))}
        </div>
      </div>
    </GameContext.Provider>
  )
}