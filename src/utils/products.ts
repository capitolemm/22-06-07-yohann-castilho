import { ICart } from "src/redux/cart/cart.types";
import { IProductsData } from "src/redux/products/products.types";

export const calcProductsTotal = (products:IProductsData, cart: ICart) => {
    let productQuantity: {[id:string]: number} = {}
    let totalSum = 0

    for(const product of Object.values(cart)){
        productQuantity = {...productQuantity, [product.id]: product.quantity}
    }

    for(const key of Object.keys(productQuantity)) {
        totalSum = totalSum + (products[key].price * productQuantity[key])
    }
    
    return totalSum
};
