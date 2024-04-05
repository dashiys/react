import { useState } from "react"

const Input = () => {
    const [selector, refSelector] = useState(0)
    return (
        <>
            <input type="text" onChange={e => refSelector(Number(e.target.value))} />
            {[...Array(selector)].map((i) => (<input type="text" key={i} />))}
        </>
    )
}

export default Input