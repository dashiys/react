import { instance } from "./api";


export const getPokemon = () => instance.get(`/pokemon`)

