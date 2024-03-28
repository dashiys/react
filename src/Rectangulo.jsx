import { useRef } from 'react';

export const Rectangulo = () => {
    const ancho = useRef()
    const alto = useRef()
    const calculo = useRef()

    const calcular = () => {
        const resultado = ancho.current.value * alto.current.value;
        calculo.current.innerHTML = resultado;
    }
    return (
        <>
            <input type="text" ref={ancho} />
            <input type="text" ref={alto} />
            <button onClick={calcular}>Calcular</button>
            <div ref={calculo}>Rectangulo</div>
        </ >
    )
}
export default Rectangulo