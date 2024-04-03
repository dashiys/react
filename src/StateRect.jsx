import { useState } from 'react';

const Rectangulo = () => {
    const [ancho, setAncho] = useState();
    const [alto, setAlto] = useState();
    const [calculo, setCalculo] = useState();
    const resultado = ancho * alto
    return (
        <>
            <input type="text" onChange={e => setAncho(e.target.value)} />
            <input type="text" onChange={e => setAlto(e.target.value)} />
            <button onClick={() => setCalculo(resultado)}>Calcular</button>
            <div >Rectangulo {calculo}</div>
        </ >
    )
}
export default Rectangulo