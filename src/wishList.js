import { useData } from "./cart-context";
import { ADDTOCART } from "./cart-reducer";
import { checkItem } from "./util";
export const WishList = ({ setRoute }) => {
  const { cartItems, wishList, cartdispatch } = useData();
  return (
    <>
      <div
        className="App flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {wishList.map(
          ({ id, name, image, productName, inStock, fastDelivery, price }) => (
            <>
              <div>
                <img src={image} alt={productName} width="70%" height="70%" />
                <div>{name}</div>
                <div>{price}</div>
                {inStock ? <div>InStock</div> : <div>Out Of Stock</div>}
                {fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>Delivery in 3 days</div>
                )}
                <button
                  onClick={() =>
                    checkItem(cartItems, id)
                      ? setRoute("cart")
                      : cartdispatch({
                          type: ADDTOCART,
                          payload: {
                            id,
                            name,
                            price,
                            inStock,
                            fastDelivery,
                            image,
                            quantity: 1
                          }
                        })
                  }
                >
                  {checkItem(cartItems, id) ? "Go To Cart" : "Add To Cart"}
                </button>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
