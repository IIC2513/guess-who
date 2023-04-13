import './CardButton.css';

export default function CardButton({onClick, label}){
  return(
    <div>
      <button onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
