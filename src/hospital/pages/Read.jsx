import { useEffect, useState } from 'react';
import { getItems } from '../../app/services/people';
import { Link } from 'react-router-dom';

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
        <div><table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>surname</th>
                <th>fecha</th>
            </tr>
            {item.map(it => <tr key={it.id}>
                <td> <Link to={`/update/${it.id}`} key={it.id}>{it.id}</Link> </td>
                <td>{it.name}</td>
                <td>{it.surname}</td>
                <td>{it.fecha}</td>

            </tr>)}
        </table>
        </div>
    )
}

export default Read