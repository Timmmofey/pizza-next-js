"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ArrowLeft, ArrowRight, LucideMessageSquareQuote } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";
import { CartDrawertItem } from "./cart-drawer-item";
import { getCartItemDetails } from "./cart-item-details";
import { useCartStore } from "@/store";
import { PizzaSize, PizzaType } from "../../../shared/constants/pizza";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { useCart } from "../../../shared/hooks/use-cart";

type Props = {
  className?: string;
};

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {

  const {totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart()
  const [redirecting, setRedirecting] = useState(false)

  // const [totalAmount, fetchCartItems, removeCartItem, updateItemQuantity, items] = useCartStore((state) => [
  //   state.totalAmount,
  //   state.fetchCartItems,
  //   state.removeCartItem,
  //   state.updateItemQuantity,
  //   state.items,
  // ]);
 
  // React.useEffect(() => {
  //   fetchCartItems();
  // }, []);

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

    const renderWords = (amount: number): string => {
      const lastDigit = amount % 10;
      const lastTwoDigits = amount % 100;
  
      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
          return ' товаров';
      }
  
      switch (lastDigit) {
          case 1:
              return ' товар';
          case 2:
          case 3:
          case 4:
              return ' товара';
          default:
              return ' товаров';
      }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
        {totalAmount > 0 && <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} 
            {renderWords(items.length)}
            </span>
          </SheetTitle>
        </SheetHeader>}

        {!totalAmount && (
          <div className="flex flex-col items-center justify-center w-72px mx-auto">
            <img src="\assets\images\empty-box.png" />
            <Title text="Корзина пуста" className="text-center font-bold my-2"/>
            <p className="text-center text-neutral-501 mb-5">
              Чтобы совершить заказ создайте хотя бы одну пиццу
            </p>
          <SheetClose>
            <Button className="w-56 h-12 text-base" size='lg'>
              <ArrowLeft className="w-5 mr-2"/>
              Вернуться назад
            </Button>
          </SheetClose>

          </div>
        )

        }

        { totalAmount > 0 && <>
        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <CartDrawertItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              className= "mb-2"
              disabled= {item.disabled}
              details={
              item.pizzaSize && item.pizzaType
                  ? getCartItemDetails(
                      item.ingredients,
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize
                  )
                  : ""
              }
              onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-5">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-501">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-190 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>
            <Link onClick={() => setRedirecting(true)} href="/checkout">
              <Button loading={redirecting}  type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
        </>}
        </div>
      </SheetContent>
    </Sheet>
  );
};
