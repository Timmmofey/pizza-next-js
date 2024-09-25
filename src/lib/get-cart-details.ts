import { CartDTO, CartItemDTO } from "../../shared/services/dto/cart.dto";

export type CartStateItem = {
    id: number,
    quantity: number,
    name: string,
    imageUrl: string,
    disabled?: boolean,
    price: number,
    pizzaSize?: number | null,
    pizzaType?: number | null,
    ingredients: Array<{name: string; price: number}>
}

interface ReturnProps {
    items: CartStateItem[],
    totalAmount: number
}

const calcTotalPizzaPrice = (item: CartItemDTO): number => {
    const ingredientPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    return (ingredientPrice + item.productItem.price) * item.quantity
}

export const getCartItemsDetails = (data: CartDTO):ReturnProps  => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcTotalPizzaPrice(item),
        disabled: false,
        pizzaSize: item.productItem.size,
        pizzaType: item.productItem.pizzaType,
        ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price
        }))
    }))

    console.log(`get cart details ${items}`)
    
    return {
        items,
        totalAmount: data.totalAmount
    }
}