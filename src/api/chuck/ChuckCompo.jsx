
import { useState, useEffect } from "react";
import { getCategories, getJokeFromCategory } from './chuck';

const ChuckCompo = () => {
    const [category, setCategory] = useState([]);
    const [joke, setJoke] = useState([]);
    useEffect(() => {
        getCategories().then(categorias => {

            setCategory(categorias.data)
        });
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        getJokeFromCategory().then(res => setJoke(res))
    }
    console.log(11111, joke)

    return (
        <div>
            <ul>
                {category.map((categoria, i) => <a onClick={(e) => handleClick(e)} key={i} href="" style={{ display: "block" }}> <li>{categoria}</li>  </a>)}
                <p>{joke}</p>
            </ul>
        </div>
    )
}
export default ChuckCompo;