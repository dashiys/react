import { useState } from "react"

const Condi = () => {
    const [v, setV] = useState(0)

    return (
        <div>
            <button onClick={() => setV(v + 1)}>-</button>
            <p>{v}</p>
            {v % 2 === 0 && "par"}
        </div>
    )
}

export default Condi
