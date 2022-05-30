import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import db from '../sevices/firebase';

export async function GetProducts(categoryId) {
    const document = categoryId ? query(collection(db,"items"), where("categoria", "==", categoryId)) 
                                : collection(db, "items");
    const col = await getDocs(document);
    const result = col.docs.map( doc => doc= {id:doc.id, ...doc.data()});

    return result;
}

export async function GetProduct(id) {
    const document = doc(db,"items", id);
    const response = await getDoc(document);
    const result = { id:response.id, ...response.data()};
    return result;
}