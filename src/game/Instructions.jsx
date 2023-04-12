import './Instructions.css'

export default function Instructions() {
    return (
        <>
            <h2>Instrucciones</h2>
            <p>El jugador a quien le toca su turno, le hace una pregunta cerrada al otro jugador, 
                que se pueda responder con SÍ o NO, y que tenga que ver con alguna característica 
                física del personaje. Algunas de las preguntas más típicas son:
            </p>
            <ul>
                <li>¿Es una mujer?</li>
                <li>¿Tiene el pelo amarillo?</li>
                <li>¿Lleva sombrero?</li>
            </ul>
            <p> Etc etc. Según lo que responda el contrario, podrás bajar todos los personajes que 
                queden descartados, para que solo queden visibles los que aún son candidatos. Por 
                ejemplo, si preguntas al otro jugador si su personaje secreto es una mujer, y te 
                responde que SÍ, inmediatamente descartas a todos los hombres del juego. Bajas sus 
                ventanas para que ya no se vean. De esta manera, se van alternando los turnos, en 
                los que cada jugador puede hacer una y solo una pregunta.</p>
        </>
    )
}
