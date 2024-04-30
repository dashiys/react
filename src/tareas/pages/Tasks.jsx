import { Link } from 'react-router-dom';
import { useUserContext } from "../providers/UserProvider"
import { createItem, getItemsById } from '../../app/services/people';
import { useEffect, useState } from 'react';

const Tasks = () => {
    const [userId] = useUserContext();
    const [task, setTask] = useState();
    const [newtask, setNewTask] = useState();

    const getTaskByUserId = () => {
        getItemsById(userId).then(res => console.log(res))
    }

    useEffect(() => {
        getTaskByUserId()
    }, [])

    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
            </ul>
            <h1>Tasks</h1>
            <input type="text" onChange={e => setNewTask(e.target.value)} />
            <br />
            <br />

            <button onClick={async () => {
                createItem({ name: newtask }, userId)
                getTaskByUserId()
            }} >Añadir tarea</button>
        </div>
    )
}

export default Tasks