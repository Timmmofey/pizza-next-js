import { create } from "zustand";
import { Api } from "../../shared/services/api-client";
import { getCartItemsDetails } from "@/lib";
import { CartStateItem } from "@/lib/get-cart-details";
import { CreateCartItemValues } from "../../shared/services/dto/cart.dto";



export interface CartState {
    loading: boolean,
    error: boolean,
    totalAmount: number,
    items: CartStateItem[],

    fetchCartItems: () => Promise<void>
    updateItemQuantity: (id: number, quantity: number) => Promise<void>
    addCartItem: (values: any) => Promise<void>
    removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({loading: true, error: false})
            const data = await Api.cart.fetchCart()
            set(getCartItemsDetails(data))
        }   catch(error) {
            console.error(error)
            set({error:true})
        } finally {
            set({
                loading: false
            })
        }
    },

    removeCartItem: async (id: number) => {
        try {
            // set({loading: true, error: false})
            set((state) => ({
                loading: true,
                error: false,
                items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)),
              }));
            const data = await Api.cart.removeCartItem(id)
            set(getCartItemsDetails(data))
        }   catch(error) {
            console.error(error)
            set({error:true})
        } finally {
            // set({
            //     loading: false
            // })
            set((state) => ({
                loading: false,
                items: state.items.map((item) => ({ ...item, disabled: false })),
              }));
        }
    },
    updateItemQuantity: async (id: number, quantity: number) => {
        try {
            // set({loading: true, error: false})
            set((state) => ({
                loading: true,
                error: false,
                items: state.items.map((item) => (item.id === id ? { ...item, disabled: true } : item)),
              }));
            const data = await Api.cart.updateItemQuantity(id, quantity)
            set(getCartItemsDetails(data))
        }   catch(error) {
            console.error(error)
            set({error:true})
        } finally {
            // set({
            //     loading: false
            // })
            set((state) => ({
                loading: false,
                items: state.items.map((item) => ({ ...item, disabled: false })),
              }));
        }
    },
    addCartItem: async (values: CreateCartItemValues) => {
        try {
            set({loading: true, error: false})
            const data = await Api.cart.addCartItem(values)
            set(getCartItemsDetails(data))
        }   catch(error) {
            console.error(error)
            set({error:true})
        } finally {
            set({
                loading: false
            })
        }
    }
}))