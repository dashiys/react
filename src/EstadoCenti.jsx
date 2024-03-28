import { useRef, useState } from 'react';

const Grados = () => {
    const centi = useRef()
    const [fahren, setFahren] = useState()

    const convertir = () => {
        const grados = centi.current.value * 9 / 5 + 32;
        setFahren(`${centi.current.value}C son ${grados}F`);
    }
    return (
        <div>
            <input type="text" ref={centi} />
            <button onClick={convertir}>Calcular</button>
            <div>{fahren}</div>
        </div>
    )
}

export default Grados