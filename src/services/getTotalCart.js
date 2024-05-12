export const getTotalCart = (cart) => {
    let total = 0

    cart.forEach(item => total += item.price)

    return total
}