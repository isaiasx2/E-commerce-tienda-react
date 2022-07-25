import React, {useState, useContext}from "react";
const  CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);



const CartProvider = ({children}) =>{
 const [cart, setCart] = useState([]);


    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ?{...product, quantity: product.quantity + quantity}: product
            }));
        } else{
            setCart([...cart, {...item, quantity}]);
        }
    }
   console.log("Se agrego al carrito :", cart)
    

    const totalPrice = () =>{
        return cart.reduce((prev, act)=> prev + act.quantity * act.price, 0);
    }

    const totalProducts = () =>{
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }



    const clearCart = ()=> setCart([]);

    const isInCart = (id) => {return cart.find(product => product.id === id)}

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    // const removeItem = (id) => setCart(cart.forEach(item => {
    //     if (item.id === id){
    //         return item.quantity - 1
    //     }
        
    // }))
         
    
        
    
    

   




    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            // removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart,
        }}>
            {children}
        </CartContext.Provider>
        )
}


export default CartProvider;