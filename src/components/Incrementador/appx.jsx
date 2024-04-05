import Opee from "./components/Incrementador/Opee"
import { useState } from 'react';

const Appx = () => {
    const [resu, setResu] = useState(0)
    return (
        <div>
            < Opee ope={setResu} />
            <p>{resu}</p>
        </div>
    )
}

export default Appx