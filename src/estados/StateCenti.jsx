import { useState } from 'react';

const Grados = () => {
    const [fahren, setFahren] = useState()

    const convertir = (v) => {
        const grados = v * 9 / 5 + 32;
        setFahren(`${v}C son ${grados}F`);
    }
    return (
        <div>
            <input type="text" onChange={e => convertir(e.target.value)} />
            <div>{fahren}</div>
        </div>
    )
}

export default Grados
