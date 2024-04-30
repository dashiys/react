import { useState, useEffect } from 'react'
import { getItems, createItem } from '../app/services/people';
import { Tr } from './Tr';

const Libros = () => {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()

    const Consulta = () => {
        getItems().then(res => setBooks(res))
    }
    useEffect(() => {
        Consulta()
    }, [])

    console.log(books)
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Option</th>
                </tr>

                {books.map(book =>
                    <Tr key={book.id} book={book} renderBooks={Consulta} />
                )}
                <tr>
                    <td></td>
                    <td><input type="text" onChange={(e) => setTitle(e.target.value)} /></td>
                    <td><input type="text" onChange={(e) => setPrice(e.target.value)} /></td>
                    <td> <button onClick={async () => {
                        await createItem({ title, price })
                        Consulta()
                    }}>Add</button>

                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Libros


