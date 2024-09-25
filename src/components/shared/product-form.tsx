'use client'
import { useCartStore } from '@/store'
import React from 'react'
import { ProductWithRealtions } from '../../../@types/prisma'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
    product: ProductWithRealtions
    className?: string
}

export const ProductForm: React.FC<Props> = ({product, className}) => {
    const router = useRouter();
    const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading])
    
    
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(product.items[0].pizzaType);

    const onAddProduct = async () => {
        try {
          await addCartItem({
            productItemId: firstItem.id,
            });
          toast.success('Товар успешно добавлен в корзину')
          router.back()     
        } catch (error) {
            toast.error("Не удалось добавить в козрину")
            console.error(error)
        }
      };
    
      const onAddPizza = async (productItemId: number, ingredients: number[]) => {
        try {
            await addCartItem({
                productItemId,
                ingredients,
              });
            toast.success('Пицца успешно добавлена в корзину')
            router.back()     
        } catch (error) {
            toast.error("Не удалось добавить в козрину")
            console.error(error)
        }
      };
    
      const onSubmit = () =>{
        if(isPizzaForm) {
            onAddPizza(firstItem.id, [])
        } else {
            onAddProduct()
        }
      }

    return (
    <div className={className}>
        {isPizzaForm ? (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredients}
                items={product.items}
                inclickAddCart={onAddPizza}
                loading={loading}
            />
            ) : (
            <ChooseProductForm
                imageUrl={product.imageUrl}
                name={product.name}
                price={firstItem.price}
                inclickAdd={onAddProduct}
                loading={loading}
            />
        )}
    </div>
  )
}