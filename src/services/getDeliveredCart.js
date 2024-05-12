export const getDeliveredCart = (cart) => {
    const deliveredCart = []
    cart.forEach((item)=> {
        const existingItem = deliveredCart.find((prod) => prod.id == item.id)
        if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice += item.price
        } else {
            deliveredCart.push({
                id:item.id,
                title : item.title,
                price : item.price,
                image : item.image,
                quantity : 1,
                totalPrice : item.price
            })
        }
    })

    return deliveredCart
}