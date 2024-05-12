export const getCartFromStorage = () => {
    const cart = window.localStorage.getItem('cart')
    const cartParse = JSON.parse(cart)

    return cart ? cartParse : []
}