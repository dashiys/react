import { useState, useRef } from "react";

const Estado = () => {
    const euros = useRef()
    const [dolares, setDolares] = useState(0);

    const convertir = () => {
        const valor = euros.current.value * 2;
        setDolares(valor)
    }
    return (
        <div>
            <input type="text" ref={euros} />
            <button onClick={convertir}>Calcular</button>
            <div>{dolares}</div>
        </div>
    )
}
export default Estado


// const Estado = () => {

//     const [v, setV] = useState(0);

//     const a = () => {
//         setV(v + 1);
//     }
//     return (
//         <div>
//             <button onClick={a}>Pulsar</button>
//             {v}
//         </div>
//     )
// }

// export default Estado