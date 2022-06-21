export const actionType = {
    SET_FOOD_ITEMS : 'SET_FOOD_ITEMS',
    SET_CART_ITEMS :'SET_CART_ITEMS',
    SET_CARTS_ITEMS : 'SET_CARTS_ITEMS'
}

const reducer = (state,action) => {
    
    switch (action.type)  {

        case actionType.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems
            };

        case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case actionType.SET_CARTS_ITEMS:
            return {
                ...state,
                cartsItems:action.cartsItems
            }

            default:
                return state;

    
    }
}

export default reducer