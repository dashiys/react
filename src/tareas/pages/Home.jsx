import { Link } from 'react-router-dom';
import { access } from '../../services/servicesTask';
import { useState } from 'react';
import { useUserContext } from '../providers/UserProvider';

const Home = () => {
    const [name, setName] = useState()
    const [userId, setUserId] = useUserContext()
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
            </ul>
            <p>Introduce tu nombre. Si no está en la base de datos, se creará.</p>
            <br />
            <input type="text" onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={() => access(name).then(setUserId)} >Acceder</button>
        </div>
    )
}

export default Home