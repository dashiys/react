import { useState } from "react";

export const App = () => {
    const [objectToSave, setObjectToSave] = useState({});
    const [elements, setElements] = useState(0);
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setElements(Number(e.target.value))}
            />
            {[...Array(elements)].map((u, i) => (
                <input
                    key={i}
                    type="text"
                    onChange={(e) =>
                        setObjectToSave({
                            ...objectToSave,
                            ["propiedad" + i]: e.target.value,
                        })
                    }
                />
            ))}

            <button
                onClick={() => {
                    console.log("objectToSave", objectToSave);
                }}
            >
                Save
            </button>
        </div>
    );
};

export default App;
