import { useState } from "react"

export const Tr = ({ book, renderBooks }) => {
    const [title, setTitle] = useState(book.title);
    const [price, setPrice] = useState(book.price);

    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.price}</td>
        </tr>
    )
}