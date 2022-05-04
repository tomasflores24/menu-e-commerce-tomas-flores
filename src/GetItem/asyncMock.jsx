const productosPedidos = [
    {id: 1,titulo: "Tecnologia", descripcion: "Esto es tech...", price: 100, pictureUrl: "https://placeimg.com/250/250/tech/1",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 2,titulo: "Animales", descripcion: "Esto es animaless...", price: 200, pictureUrl: "https://placeimg.com/250/250/animals/1",detalle:"Ver Detalle Del Producto", categoria: "animales"},
    {id: 3,titulo: "Tecnologia", descripcion: "Esto es tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/2",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 4,titulo: "Naturaleza", descripcion: "Esto es naturaleza...", price: 400, pictureUrl: "https://placeimg.com/250/250/nature/1",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 5,titulo: "Naturaleza", descripcion: "Esto es naturaleza...", price: 500, pictureUrl: "https://placeimg.com/250/250/nature/2",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},

    {id: 6,titulo: "Tecnologia", descripcion: "Esto es tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/3",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 7,titulo: "Naturaleza", descripcion: "Esto es naturaleza...", price: 400, pictureUrl: "https://placeimg.com/250/250/nature/3",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 8,titulo: "Naturaleza", descripcion: "Esto es naturaleza...", price: 500, pictureUrl: "https://placeimg.com/250/250/nature/4",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 9,titulo: "Naturaleza", descripcion: "Esto es naturaleza...", price: 500, pictureUrl: "https://placeimg.com/250/250/nature/5",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 10,titulo: "Animales", descripcion: "Esto es animales...", price: 500, pictureUrl: "https://placeimg.com/250/250/animals/2",detalle:"Ver Detalle Del Producto", categoria: "animales"}
];


export function GetProductos (category) {
    const MyPromise = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve((category) ? productosPedidos.filter( p => p.categoria === category) : productosPedidos);
        }, 500);
    } );
    return MyPromise;
}

export function GetProducto (id) {
    const MyPromise = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve(productosPedidos.find( producto => producto.id=== parseInt(id)));
        }, 1500);
    } );
    return MyPromise;
}