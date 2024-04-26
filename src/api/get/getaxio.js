
import axios from "axios";

const fetchData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log("Data recibida:", response.data);
};

fetchData();
