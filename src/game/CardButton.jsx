import './CardButton.css';

export default function CardButton({onClick, showImage}){
    return(
        <div> 
            <button onClick={onClick}>
                {showImage ? "Ocultar" : "Mostrar"}
            </button>
        </div>

    )
}