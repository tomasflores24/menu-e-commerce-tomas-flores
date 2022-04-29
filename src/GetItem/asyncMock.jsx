// const productosPedidos = [
//     {id: 1,titulo: "Tech", descripcion: "Esto es tech...", price: 100, pictureUrl: "https://placeimg.com/150/150/tech",detalle:"Ver Detalle Del Producto"},
//     {id: 2,titulo: "animals", descripcion: "Esto es animaless...", price: 200, pictureUrl: "https://placeimg.com/150/150/animals",detalle:"Ver Detalle Del Producto"},
//     {id: 3,titulo: "people", descripcion: "Esto es people...", price: 300, pictureUrl: "https://placeimg.com/150/150/people",detalle:"Ver Detalle Del Producto"},
//     {id: 4,titulo: "arch", descripcion: "Esto es arch...", price: 400, pictureUrl: "https://placeimg.com/150/150/arch",detalle:"Ver Detalle Del Producto"},
//     {id: 5,titulo: "nature", descripcion: "Esto es nature...", price: 500, pictureUrl: "https://placeimg.com/150/150/nature",detalle:"Ver Detalle Del Producto"},

//     {id: 6,titulo: "Tech", descripcion: "Esto es tech...", price: 100, pictureUrl: "https://placeimg.com/150/150/tech",detalle:"Ver Detalle Del Producto"},
//     {id: 7,titulo: "animals", descripcion: "Esto es animaless...", price: 200, pictureUrl: "https://placeimg.com/150/150/animals",detalle:"Ver Detalle Del Producto"},
//     {id: 8,titulo: "people", descripcion: "Esto es people...", price: 300, pictureUrl: "https://placeimg.com/150/150/people",detalle:"Ver Detalle Del Producto"},
//     {id: 9,titulo: "arch", descripcion: "Esto es arch...", price: 400, pictureUrl: "https://placeimg.com/150/150/arch",detalle:"Ver Detalle Del Producto"},
//     {id: 10,titulo: "nature", descripcion: "Esto es nature...", price: 500, pictureUrl: "https://placeimg.com/150/150/nature",detalle:"Ver Detalle Del Producto"}
// ];

const productosPedidos ={id: 1,titulo: "Tech", descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.    delectus vero repudiandae, facilis modi dolore recusandae ", price: 100, pictureUrl: "https://placeimg.com/150/150/tech",detalle:"Ver Detalle Del Producto"};

export function GetProductos () {
    const MyPromise = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve(productosPedidos);
        }, 500);
    } );
    return MyPromise;
}