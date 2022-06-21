export const fetchCartItems = () => {

    const fetchcart = localStorage.getItem('cartItems') !== "undefined" ? JSON.parse(localStorage.getItem('cartItems')) : localStorage.clear();


    return fetchcart ? fetchcart : []

}