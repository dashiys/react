import { useState, useEffect } from 'react'
import { getItems, createItem, updateItem, deleteItem } from '../app/services/people';

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
                    <th>option</th>
                </tr>

                {books.map(book => <tr key={book.id}>
                    <td>{book.id}</td>
                    <td><input type="text" value={book.title} onChange={(e) => setTitle(e.target.value)} /></td>
                    <td><input type="text" value={book.price} onChange={(e) => setPrice(e.target.value)} /></td>
                    <td> <button onClick={async () => {
                        await deleteItem({ title, price })
                    }}>Remove</button>
                        {<button onClick={async () => {
                            await updateItem({ title, price })
                        }}>Update</button>}
                    </td>
                </tr>)}
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


