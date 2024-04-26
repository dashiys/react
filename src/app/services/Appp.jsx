import { useEffect, useState } from 'react'
import { createItem, deleteItem, getItems } from './people';

const Appp = () => {
    const [userName, setUserName] = useState();
    const [items, setItems] = useState();
    const [id, setId] = useState();

    const Consulta = () => {
        getItems().then(res => setItems(res))
    }

    useEffect(() => {
        Consulta()
    }, [])

    console.log(items)
    return (
        <div>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" onChange={(e) => setId(e.target.value)} />
            <button onClick={async () => {
                await createItem({ userName })
                Consulta()
            }}>Salvar datos</button>

            <button onClick={async () => {
                await deleteItem(id)
                Consulta()
            }}>Borrar datos</button>
            <div>
                {
                    items?.map(a => <div key={a.id} >{a.userName}- {a.id}</div>)
                }
            </div>
        </div >
    )
}

export default Appp