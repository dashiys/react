import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../app/services/appi"
const collectionName = "users"

export const access = async (name) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}