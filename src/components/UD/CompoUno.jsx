import { useState } from "react"

const CompoUno = ({ sendVal }) => {
    const [box, setBox] = useState(0)
    const [boxx, setBoxx] = useState(0)

    return (
        <>
            <input type="text" placeholder="Número 1" onChange={e => setBox(e.target.value)} />
            <input type="text" placeholder="Número 2" onChange={e => setBoxx(e.target.value)} />
            <button onClick={() => sendVal(box * boxx)}>Calcular</button>;
        </>
    )
}

export default CompoUno