import { useData } from "./cart-context";
import { INCREMENT, DECREMENT, REMOVEITEMSINCART } from "./cart-reducer";

const CartValue = (total, value) => {
  return total + value.price * value.quantity;
};
export const Cart = () => {
  const { cartItems, cartdispatch } = useData();

  return (
    <>
      <h3>cart Value:{cartItems.reduce(CartValue, 0)}</h3>
      <div
        className="App flex"
        style={{
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {cartItems.map(
          ({
            id,
            image,
            price,
            name,
            productName,
            inStock,
            fastDelivery,
            rating,
            quantity
          }) => (
            <>
              <div key={id} className="card card--shadow m-1">
                <img src={image} alt={productName} width="100%" height="auto" />
                <br />
                <div>{name}</div>
                <div style={{ fontFamily: "bold" }}>{price}</div>
                {inStock ? <div>InStock</div> : <div>Out Of Stock</div>}
                {fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>Delivery in 3 days</div>
                )}
                <button
                  className="incdec"
                  onClick={() =>
                    cartdispatch({ type: INCREMENT, payload: { id } })
                  }
                >
                  +
                </button>
                {quantity}
                <button
                  className="incdec"
                  onClick={() =>
                    cartdispatch({ type: DECREMENT, payload: { id } })
                  }
                >
                  -
                </button>
                <button
                  style={{
                    fontSize: "1.1rem",
                    background: "white"
                  }}
                  className="btn-close btn-lg btn-ed"
                  onClick={() =>
                    cartdispatch({ type: REMOVEITEMSINCART, payload: { id } })
                  }
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
