import { createContext, useContext, useReducer } from "react";
import {
  products,
  reducerFunc,
  Show_Out_Of_Stock,
  Show_Fast_Delivery,
  sortBy,
  Show_Ratings
} from "./reducer-context";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    products,
    [Show_Out_Of_Stock]: true,
    [Show_Fast_Delivery]: false,
    [sortBy]: null,
    [Show_Ratings]: false
  });
  console.log(state.sortBy);
  return (
    <>
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
export const useProduct = () => {
  return useContext(ProductContext);
};
