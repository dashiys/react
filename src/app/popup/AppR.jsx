import { useState } from "react";
import Popup from "./components/Popup";

export const AppR = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Mostrar popup</button>

            <Popup visible={visible} />
        </div>
    );
};

export default AppR