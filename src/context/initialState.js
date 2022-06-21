import { fetchCartItems } from "../utils/fetchdata";


const cartInfo = fetchCartItems();


export const initialState = {
    foodItems: null,
    cartItems:false,
    cartsItems: cartInfo
};
