import { useState } from "react"
import CompoBooks from "./CompoBooksR"
import { arrayBooks } from "./data/arrayBooks"

function App() {
  const [dolares, setDolares] = useState()
  const [mostrar, setMostrar] = useState(0)

  return (
    <>
      <div>{arrayBooks.map(book =>
        <CompoBooks book={book} mostrar={mostrar} key={book.id} />)}</div>
      <input type="text" onChange={e => setDolares(e.target.value * 2)} />
      <button onClick={() => setMostrar(dolares)}>Cambiar valor</button>

    </>
  )
}

export default App
