import { useState } from 'react';
import { Btn, Btn2, Pequeñas, Titulo, Container, Grande, Img } from './estilosDepo';
import workouts from "./dataDepo/workouts"
import flecha from "./imgDepo/flecha.png";



function Deportes() {
    const [workout, setWorkout] = useState(0)
    const [big, setBig] = useState(0)

    const ejercicio = workouts[workout]
    console.log(ejercicio.exercises)
    return (
        <>
            <Titulo>
                <Btn onClick={() => setWorkout(workout == 0 ? 0 : workout - 1)}><img src={flecha} alt="" /></Btn>
                <h1>{workouts[workout].title}</h1>
                <Btn2 onClick={() => workout != workouts.length - 1 && setWorkout(workout + 1)}><img src={flecha} alt="" /> </Btn2>
            </Titulo >
            <Container>
                <Grande><img src={ejercicio.exercises[big].img} alt="" /> </Grande>
                <Pequeñas>
                    {workouts[workout].exercises.map((ex, i) =>
                        <Img ilumina={i === big} onClick={() => setBig(i)} src={ex.img} alt="" key={i} />
                    )
                    }
                </Pequeñas>
            </Container>
        </>
    )
}

export default Deportes

//div, <p> {ex.name} </p>  div (para poner más cosas)

