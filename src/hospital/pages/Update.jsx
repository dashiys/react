import { useNavigate, useParams } from 'react-router-dom';
import { deleteItem, getItemById, getItems, updateItem } from '../../app/services/people';
import { useEffect, useState } from 'react';

const Update = () => {
    const [paciente, setPaciente] = useState();
    const { id } = useParams()
    const navigate = useNavigate()

    const Consulta = () => {
        getItems().then(res => setPaciente(res))
    }

    const A = () => {
        getItemById(id).then(res => { setPaciente(res) })
    }

    useEffect(() => {
        Consulta()
        A()
    }, [])
    console.log(paciente)
    return (
        <div>
            <h1>Update y Delete</h1>
            <input type="text" value={paciente?.name} onChange={(e) => setPaciente({ ...paciente, name: e.target.value })} />
            <input type="text" value={paciente?.surname} onChange={(e) => setPaciente({ ...paciente, surname: e.target.value })} />
            <input type="date" value={paciente?.fecha} onChange={(e) => setPaciente({ ...paciente, fecha: e.target.value })} />
            <br />
            <br />
            <button onClick={async () => {
                await deleteItem(id)
                Consulta()
                navigate("/read")
            }}>Eliminar</button>

            <button onClick={async () => {
                await updateItem(id, paciente)
                Consulta()
            }}>Update</button>
            <div> </div>
        </div>
    )
}

export default Update