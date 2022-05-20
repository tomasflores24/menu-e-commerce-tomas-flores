// import {getDocs, getFirestore, collection} from 'firebase/firestore'

const productosPedidos = [
    {id: 1,title: "Tecnologia 1", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique", price: 100, pictureUrl: "https://placeimg.com/250/250/tech/1", categoria: "tecnologia", stock: 5},
    {id: 2,title: "Animales 2", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique animaless...", price: 200, pictureUrl: "https://placeimg.com/250/250/animals/1", categoria: "animales", stock: 5},
    {id: 3,title: "Tecnologia 3", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/2", categoria: "tecnologia", stock: 5},
    {id: 4,title: "Naturaleza 4", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 400, pictureUrl: "https://placeimg.com/250/250/nature/1", categoria: "naturaleza", stock: 5},
    {id: 5,title: "Naturaleza 5", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 500, pictureUrl: "https://placeimg.com/250/250/nature/2", categoria: "naturaleza", stock: 5},

    {id: 6,title: "Tecnologia 6", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/3", categoria: "tecnologia", stock: 5},
    {id: 7,title: "Naturaleza 7", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 150, pictureUrl: "https://placeimg.com/250/250/nature/3", categoria: "naturaleza", stock: 5},
    {id: 8,title: "Naturaleza 8", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 350, pictureUrl: "https://placeimg.com/250/250/nature/4", categoria: "naturaleza", stock: 5},
    {id: 9,title: "Naturaleza 9", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 750, pictureUrl: "https://placeimg.com/250/250/nature/5", categoria: "naturaleza", stock: 5},
    {id: 10,title: "Animales 10", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique animales...", price: 500, pictureUrl: "https://placeimg.com/250/250/animals/2", categoria: "animales", stock: 5}
];

// const db = getFirestore();
// const itemCollection = collection(db, "items");
// getDocs(itemCollection)
//  .then(snapshot => {});

export function GetProductos (category) {
    const MyPromise = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve((category) ? productosPedidos.filter( p => p.categoria === category) : productosPedidos);
        }, 1500);
    } );
    return MyPromise;
}



// export function GetProductos (category) {
//     const MyPromise = new Promise ( (resolve, reject) => {
//         setTimeout(() => {
//             resolve((category) ? productosPedidos.filter( p => p.categoria === category) : productosPedidos);
//         }, 1500);
//     } );
//     return MyPromise;
// }

// export function GetProducto (id) {
//     const MyPromise = new Promise ( (resolve, reject) => {
//         setTimeout(() => {
//             resolve(productosPedidos.find( producto => producto.id === id));
//         }, 1500);
//     } );
//     return MyPromise;
// }