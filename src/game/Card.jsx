import './Card.css'
import { useState } from 'react'
import CardButton from './CardButton'

export default function Card({imgSrc}){
  const [showImage, setShowImage] = useState(true);
  const toggleImage =() => {
    setShowImage(!showImage);
  }
  return(
    <div className="card">
      <div className="card-container">
        {showImage && <img src={imgSrc} className="img" alt="avatar"/>}
      </div>
      <CardButton onClick={toggleImage} showImage={showImage}/>
    </div>
  )
}