import { useEffect, useState } from "react"
import { getItems } from '../../app/services/people';

const Read = () => {
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
            <h1>Read</h1>
            <div> {item.map(nom => {
                return <p key={nom.id}>{nom.userName}</p>
            })}</div>
        </div>
    )
}

export default Read