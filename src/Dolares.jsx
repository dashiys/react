import { useRef } from 'react';
const Dolares = () => {
    const euros = useRef()
    const dolares = useRef()

    const convertir = () => {
        const valor = euros.current.value * 2;
        dolares.current.innerHTML = valor;
    }
    return (
        <div>
            <input type="text" ref={euros} />
            <button onClick={convertir}>Calcular</button>
            <div ref={dolares}></div>
        </div>
    )
}

export default Dolares