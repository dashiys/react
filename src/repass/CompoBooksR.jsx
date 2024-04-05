import { Contenedor } from "./componentsStyleR"

const CompoBooks = ({ book, mostrar }) => {
    return (
        <>
            <Contenedor>
                <h2>{book.name}</h2>
                <h3>{book.author}</h3>
                <p>{book.year}</p>
                <img src={book.img} alt="" />
                <div>{mostrar}</div>
            </Contenedor>
        </>
    )
}

export default CompoBooks