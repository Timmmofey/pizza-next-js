import { useCartStore } from "@/store";
import React from "react";
import { CreateCartItemValues } from "../services/dto/cart.dto";
import { CartItem } from "@prisma/client";
import { CartStateItem } from "@/lib/get-cart-details";

type ReturnProps = {
    totalAmount:number
    items: CartStateItem[]
    loading: boolean
    updateItemQuantity: (id: number, quantity: number) => void
    removeCartItem: (id: number) => void
    addCartItem: (values: CreateCartItemValues) => void
}

export const useCart = (): ReturnProps => {
    const [totalAmount, fetchCartItems, addCartItem, removeCartItem, updateItemQuantity, loading, items] = useCartStore((state) => [
        state.totalAmount,
        state.fetchCartItems,
        state.addCartItem,
        state.removeCartItem,
        state.updateItemQuantity,
        state.loading,
        state.items,
      ]);
    
    React.useEffect(() => {
        fetchCartItems();
      }, []);

    return {totalAmount, addCartItem, removeCartItem, updateItemQuantity, loading, items}
}