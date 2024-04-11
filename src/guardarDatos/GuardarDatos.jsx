import { useState } from "react";

const GuardarDatos = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");

    const saveData = () => {
        const obj = {
            nombre: inputValue,
            apellido: inputValue2,
        };
        localStorage.setItem("cualQuierCosa", JSON.stringify(obj));
    };

    const getData = () => {
        const data = localStorage.getItem("cualQuierCosa");
        const obj = JSON.parse(data);
        console.log(obj);
        console.log(data);
    };
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <input type="text" onChange={(e) => setInputValue2(e.target.value)} />

            <button onClick={saveData}>Boton</button>

            <button onClick={getData}>RecuperarData</button>
        </div>
    );
};

export default GuardarDatos;
