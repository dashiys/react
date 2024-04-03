import { useState } from "react";

const ANIMAL_IMAGES = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
};

const Img = () => {
    const [imagen, setImagen] = useState()
    return (
        <div>
            <button onClick={() => setImagen(ANIMAL_IMAGES.img1)}>Img1</button>
            <button onClick={() => setImagen(ANIMAL_IMAGES.img2)}>Img2</button>
            <button onClick={() => setImagen(ANIMAL_IMAGES.img3)}>Img3</button>
            <br />
            <img src={imagen} alt="" />
        </div >
    )
}

export default Img

