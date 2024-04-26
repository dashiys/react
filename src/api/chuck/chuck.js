import axios from "axios";

export const getCategories = () => axios.get("https://api.chucknorris.io/jokes/categories");
export const getJokeFromCategory = async () => {
    const d = await axios.get("https://api.chucknorris.io/jokes/random");
    return d.data.value;
};
