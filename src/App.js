import { useState } from "react";
import { ProductListing } from "./productListing";
import "./styles.css";
import { Cart } from "./cart";
import { WishList } from "./wishList";

// const CartValue=(items)=>{
// return items.reduce((total,{price,quantity})=>total+price*quantity,0)
// }
// const CartValue=(items)=>{
//   return items.reduce((total,value)=>total+value.price*value.quantity,0)
// }

export default function App() {
  const [route, setRoute] = useState("products");

  return (
    <div className="App">
      <h1>eCommerce</h1>
      <button className="btns" onClick={() => setRoute("products")}>
        product
      </button>
      <button className="btns" onClick={() => setRoute("cart")}>
        Cart
      </button>
      <button className="btns" onClick={() => setRoute("wishlist")}>
        WishList
      </button>
      {route === "products" && <ProductListing setRoute={setRoute} />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <WishList setRoute={setRoute} />}
    </div>
  );
}
