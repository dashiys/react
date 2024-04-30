import { useState } from "react"
import { deleteItem, updateItem } from "../app/services/people";

export const Tr = ({ book, renderBooks }) => {
    const [title, setTitle] = useState(book?.title);
    const [price, setPrice] = useState(book?.price);
    return (
        <tr>
            <td>{book.id}</td>
            <td><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></td>
            <td><input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} /></td>
            <td> <button onClick={async () => {
                await deleteItem(book.id)
                renderBooks()
            }}>Remove</button>

                <button onClick={async () => {
                    await updateItem(book.id, { title, price })
                    renderBooks()
                }}>Update</button>
            </td>
        </tr>)


}