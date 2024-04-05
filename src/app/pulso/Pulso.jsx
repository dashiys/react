import { useState } from "react";
import { MyStyledComponent } from "./app/pulso/puslo";

export const Pulso = () => {
    const [color, setColor] = useState()
    return (
        <div>
            <button onClick={() => setColor('blue')}>Cambiar color</button>
            <MyStyledComponent x={color} />
        </div>
    );
};

export default Pulso