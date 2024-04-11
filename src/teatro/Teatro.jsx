import { useState } from "react"
import teatro from "../data/teatro.json"
import { P } from "./StyledTeatro"

function Teatro() {
  const [boton, setBoton] = useState(0)

  return (
    <>
      <button onClick={() => setBoton(boton == 0 ? 0 : boton - 1)}>Anterior</button>
      <button onClick={() => setBoton(boton == teatro.length - 1 ? teatro.length - 1 : boton + 1)}>Siguiente</button >

      <div>{teatro.map((discurso, i) =>
        <P ilumina={i === boton} key={i} > {discurso} </P>)
      }</div>
    </>
  )
}

export default Teatro;
