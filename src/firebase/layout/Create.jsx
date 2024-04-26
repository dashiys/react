import { useEffect, useState } from 'react';
import { createItem, getItems } from '../../app/services/people';

const Create = () => {
    const [userName, setUserName] = useState();
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
            <h1>Create</h1>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={async () => {
                await createItem({ userName })
                Consulta()
            }
            }>Añadir</button>
            <div> {item.map(nom => {
                return <p key={nom.id}>{nom.userName}</p>
            })}</div>
        </div>
    )
}

export default Create