import { useEffect, useState } from "react";
import { getObtencion } from "./api";

const CompoApi = () => {
    const [family, setFamily] = useState([]);


    useEffect(() => {
        getObtencion().then((obtencion) => {
            setFamily(obtencion);
        });
    }, [])
    console.log(family)

    return <div>{family.map((hijo, i) =>
        <p key={i} > {hijo.title} </p>)
    }</div>
};

export default CompoApi