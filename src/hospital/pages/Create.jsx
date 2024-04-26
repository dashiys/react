import { useState } from "react"
import { createItem } from '../../app/services/people';

const Create = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [fecha, setFecha] = useState()


    return (
        <div>
            <h1>Create</h1>
            <input type="text" placeholder="Pacient Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Pacient Pacient Surname" onChange={(e) => setSurname(e.target.value)} />
            <br />
            <br />
            <input type="date" onChange={(e) => setFecha(e.target.value)} />
            <br />
            <br />
            <button onClick={async () => {
                await createItem({ name, surname, fecha })
            }}>Create</button>
        </div>
    )
}

export default Create