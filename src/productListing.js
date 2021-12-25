import { useData } from "./cart-context";
import { useProduct } from "./product-context";
import { ADDTOCART, ADDTOWISHLIST, REMOVEWISHITEM } from "./cart-reducer";
import {
  Show_Fast_Delivery,
  Show_Out_Of_Stock,
  sortBy,
  clearFilter,
  Show_Ratings
} from "./reducer-context";
import { checkItem } from "./util";
export const ProductListing = ({ setRoute }) => {
  const { cartItems, wishList, cartdispatch } = useData();

  const { state, dispatch } = useProduct();

  const sortedValue = state[sortBy];
  console.log(sortedValue, 11);
  let sortedData = state.products;

  if (sortedValue === "PRICE_HIGH_TO_LOW") {
    sortedData = state.products.sort((a, b) => b.price - a.price);
    console.log(sortedData);
  }
  if (sortedValue === "PRICE_LOW_TO_HIGH") {
    sortedData = state.products.sort((a, b) => a.price - b.price);
  }

  let filteredData = sortedData;
  if (!state[Show_Out_Of_Stock]) {
    filteredData = sortedData.filter((items) => items.inStock);
  }
  let finalData = filteredData;
  if (state[Show_Fast_Delivery]) {
    finalData = filteredData.filter((items) => items.fastDelivery);
  }

  if (state[Show_Ratings]) {
    finalData = filteredData.filter((items) => items.ratings === 5);
  }

  return (
    <>
      <fieldset>
        <legend>Sortby</legend>
        <input
          checked={state[sortBy] === "PRICE_HIGH_TO_LOW"}
          onClick={() =>
            dispatch({ type: sortBy, payload: "PRICE_HIGH_TO_LOW" })
          }
          type="radio"
          name="sort"
        />
        High To Low
        <input
          checked={state[sortBy] === "PRICE_LOW_TO_HIGH"}
          type="radio"
          name="sort"
          onClick={() =>
            dispatch({ type: sortBy, payload: "PRICE_LOW_TO_HIGH" })
          }
        />
        Low To High
      </fieldset>
      <fieldset>
        <legend>Filters</legend>
        <input
          checked={state[Show_Out_Of_Stock]}
          onClick={() => dispatch({ type: Show_Out_Of_Stock })}
          type="checkbox"
        />
        Out Of Stock
        <input
          checked={state[Show_Fast_Delivery]}
          onClick={() => dispatch({ type: Show_Fast_Delivery })}
          type="checkbox"
        />
        Fast Delivery
        <input
          checked={state[Show_Ratings]}
          onClick={() => dispatch({ type: Show_Ratings })}
          type="checkbox"
        />{" "}
        5 ⭐Ratings
      </fieldset>
      <button onClick={() => dispatch({ type: clearFilter })}>
        Clear filter
      </button>
      <div
        className="App flex"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {finalData.map(
          ({
            id,
            name,
            productName,
            image,
            price,
            inStock,
            fastDelivery,
            ratings
          }) => (
            <>
              <div key={id} className="card card--shadow m-1">
                <img src={image} alt={productName} width="100%" height="60%" />

                <br />
                {name}
                <div>{price} </div>
                {inStock ? <div>In Stock</div> : <div>Out Of stock</div>}
                {fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>3 days Minimum</div>
                )}
                {ratings}
                <br />
                <button
                  className="btncart"
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
                <button
                  style={{
                    fontSize: "1.1rem",
                    padding: "0.4em",
                    color: `${checkItem(wishList, id) ? "red" : "grey"}`,
                    backgroundColor: "white"
                  }}
                  className="btn-close btn-lg"
                  onClick={() =>
                    checkItem(wishList, id)
                      ? cartdispatch({ type: REMOVEWISHITEM, payload: { id } })
                      : cartdispatch({
                          type: ADDTOWISHLIST,
                          payload: {
                            id,
                            name,
                            price,
                            inStock,
                            fastDelivery,
                            image,
                            productName
                          }
                        })
                  }
                >
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
