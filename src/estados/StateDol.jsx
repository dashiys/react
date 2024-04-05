import { useState } from "react";

const Estado = () => {
    const [dolares, setDolares] = useState(0);

    const convertir = (v) => {
        const valor = v * 2;
        setDolares(valor)
    }
    return (
        <div>
            <input type="text" onChange={e => convertir(e.target.value)} />
            <div>{dolares}</div>
        </div>
    )
}
export default Estado