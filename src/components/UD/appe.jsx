import CompoUno from "./components/UD/CompoUno"
import CompoDos from "./components/UD/CompoDos"
import { useState } from 'react';

const Appe = () => {
    const [resu, setResu] = useState(0)
    return (
        <div><CompoUno sendVal={setResu} />
            <div><CompoDos resultado={resu} /></div>

        </div>
    )
}

export default Appe
