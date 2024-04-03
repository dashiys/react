import { useState } from 'react';
const Opee = ({ ope }) => {
    const [v, setV] = useState(0)
    const updateVal = (v) => {
        setV(v);
        ope(v);
    }
    return (
        <>
            <button onClick={() => updateVal(v - 1)}>-</button>
            <input type="text" onChange={e => updateVal(Number(e.target.value))} value={v} />
            <button onClick={() => updateVal(v + 1)}>+</button>
        </>
    )
}

export default Opee