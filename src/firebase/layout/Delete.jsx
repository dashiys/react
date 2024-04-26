import { useEffect, useState } from 'react';
import { deleteItem, getItems } from '../../app/services/people';

const Delete = () => {
    const [id, setId] = useState();
    const [item, setItem] = useState([])

    const Consulta = () => {
        getItems().then(res => setItem(res))
    }
    useEffect(() => {
        Consulta()
    }, [])

    console.log(item)

    return (
        <div>
            <h1>Delete</h1>
            <input type="text" onChange={(e) => setId(e.target.value)} />
            <button onClick={async () => {
                await deleteItem(id)
                Consulta()
            }
            }>Eliminar</button>
            <div> {item.map(nom => {
                return <p key={nom.id}>{nom.userName} - {nom.id}</p>
            })}</div>
        </div>
    )
}

export default Delete