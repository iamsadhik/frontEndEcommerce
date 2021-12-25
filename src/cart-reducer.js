export const data = {
  cartItems: [],
  wishList: []
};
export const ADDTOCART = "Add_To_Cart";
export const INCREMENT = "Increment";
export const DECREMENT = "Decrement";
export const REMOVEITEMSINCART = "RemoveItemsInCart";
export const ADDTOWISHLIST = "Add_To_WishList";
export const REMOVEWISHITEM = "Remove_Wish_Item";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADDTOCART:
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    case INCREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((items) =>
          items.id === action.payload.id
            ? { ...items, quantity: items.quantity + 1 }
            : items
        )
      };
    case DECREMENT:
      return {
        ...state,
        cartItems: state.cartItems.map((items) =>
          items.id === action.payload.id
            ? { ...items, quantity: items.quantity - 1 }
            : items
        )
      };
    case REMOVEITEMSINCART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => items.id !== action.payload.id
        )
      };
    case ADDTOWISHLIST:
      return { ...state, wishList: state.wishList.concat(action.payload) };
    case REMOVEWISHITEM:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== action.payload.id)
      };
    default:
      return { state };
  }
};
