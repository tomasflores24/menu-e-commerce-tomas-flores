import { createContext, useContext, useState } from "react";

export const cartContext = createContext({});

export const useCartContext = () => useContext(cartContext);

export function CartContextProvider ( {children} ) {
    const [productList, setProductList] = useState([]);
    const isInCart = (id) => productList.some(item => item.id === id);




    const addToCart = (item, quantity) => {
        /*if(isInCart(item.id)){
            return setProductList(
                productList.map(product => 
                product.id === item.id
                ? {...product, quantity : product.quantity + quantity}
                : product
                ));

        }*/
        
        setProductList([...productList, {...item, quantity}]);

        if(isInCart(item.id)){
            const productListAux= productList.map(product => {
              if(product.id === item.id){
                product.quantity = product.quantity + quantity;
              }
              return product;
              })
            setProductList(productListAux);
        }else{
            setProductList([...productList, {...item, quantity}]);
        }
    }// Add To Cart

    const emptyCart = () => {
        setProductList([]);
    }

    const deleteByID = (id) => {
        setProductList(productList.filter( item => item.id !== id));
    }

    const totalCount = () => productList.reduce( (total, item) => total + item.quantity , 0); 

    // const totalPrice = () => productList.reduce( (total, item) =>  total + item.quantity * item.price , 0);

    const totalPrice = () => {
        let total = 0;
        for (const item of productList) {
            total = total + item.price * item.quantity;
        }
        return total;
    }

    const unitsPerProducts = (id) => productList.find(item => item.id === id).quantity

    return(
        <cartContext.Provider 
        value={{
            productList,
            addToCart,
            emptyCart,
            deleteByID,
            totalCount,
            totalPrice,
            unitsPerProducts}}>
            {children}
        </cartContext.Provider>
    );
}




















































// const CartContext = createContext({
//     products: [],
//     addProduct: () =>{}
// });

// export const CartContextProvider = ({children}) => {
//     const [productList, setProductList] = useState([]);
    
//     const addProduct = (product) => {
//         setProductList([...productList, product]);
//         // console.log(productList, "Product List");
//     }

//     return (
//         <CartContext.Provider value={{
//             products : productList,
//             addProduct :  addProduct
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export default CartContext;
// // after 20.38