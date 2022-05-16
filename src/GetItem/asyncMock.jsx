const productosPedidos = [
    {id: 1,titulo: "Tecnologia1", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique", price: 100, pictureUrl: "https://placeimg.com/250/250/tech/1",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 2,titulo: "Animales2", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique animaless...", price: 200, pictureUrl: "https://placeimg.com/250/250/animals/1",detalle:"Ver Detalle Del Producto", categoria: "animales"},
    {id: 3,titulo: "Tecnologia3", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/2",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 4,titulo: "Naturaleza4", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 400, pictureUrl: "https://placeimg.com/250/250/nature/1",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 5,titulo: "Naturaleza5", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 500, pictureUrl: "https://placeimg.com/250/250/nature/2",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},

    {id: 6,titulo: "Tecnologia6", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique tecnologia...", price: 250, pictureUrl: "https://placeimg.com/250/250/tech/3",detalle:"Ver Detalle Del Producto", categoria: "tecnologia"},
    {id: 7,titulo: "Naturaleza7", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 150, pictureUrl: "https://placeimg.com/250/250/nature/3",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 8,titulo: "Naturaleza8", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 350, pictureUrl: "https://placeimg.com/250/250/nature/4",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 9,titulo: "Naturaleza9", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique naturaleza...", price: 750, pictureUrl: "https://placeimg.com/250/250/nature/5",detalle:"Ver Detalle Del Producto", categoria: "naturaleza"},
    {id: 10,titulo: "Animales10", descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis laborum obcaecati similique animales...", price: 500, pictureUrl: "https://placeimg.com/250/250/animals/2",detalle:"Ver Detalle Del Producto", categoria: "animales"}
];

export function GetProductos (category) {
    const MyPromise = new Promise ( (resolve, reject) => {
        setTimeout(() => {
            resolve((category) ? productosPedidos.filter( p => p.categoria === category) : productosPedidos);
        }, 1500);
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