import { useRef } from 'react';
const Grados = () => {
    const centi = useRef()
    const fahren = useRef()

    const convertir = () => {
        const grados = centi.current.value * 9 / 5 + 32;
        fahren.current.innerHTML = `${centi.current.value}C son ${grados}F`;
    }
    return (
        <div>
            <input type="text" ref={centi} />
            <button onClick={convertir}>Calcular</button>
            <div ref={fahren}></div>
        </div>
    )
}

export default Grados