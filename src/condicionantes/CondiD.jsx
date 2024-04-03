import { useState } from "react"

const CondiD = () => {
    const [v, setV] = useState(0)

    return (
        <div>
            <button onClick={() => setV(v + 1)}>-</button>
            <p>{v}</p>
            {v % 2 === 0
                ? "par"
                : "impar"
            }
        </div>
    )
}

export default CondiD