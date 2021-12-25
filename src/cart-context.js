import { createContext, useContext, useReducer } from "react";
import { data, cartReducer } from "./cart-reducer";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cartItems, wishList }, dispatch] = useReducer(cartReducer, data);

  return (
    <>
      <CartContext.Provider
        value={{ cartItems, wishList, cartdispatch: dispatch }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(CartContext);
};
