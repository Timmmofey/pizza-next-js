"use client";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRealtions } from "../../../../@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { useCartStore } from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRealtions;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

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
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
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
      </DialogContent>
    </Dialog>
  );
};
