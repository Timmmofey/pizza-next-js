'use client'
import { CheckoutItem, CheckoutItemDetails, Container, Title, WhiteBlock } from "@/components/shared";
import { Button, Input } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { useCart } from "../../../../shared/hooks/use-cart";
import { getCartItemDetails } from "@/components/shared/cart-item-details";
import { PizzaSize, PizzaType } from "../../../../shared/constants/pizza";
import { FormInput } from "@/components/shared/form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema, CheckoutFormValues } from "@/components/shared/checkout/shemas/checkout-form-shema";
import { AdressInput } from "@/components/shared/adress-input";

const VAT = 15
const DELIVERY_PRICE = 250

export default function CheckoutPage() {
    const {totalAmount, updateItemQuantity, removeCartItem, items, loading } = useCart()
    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            adress: '',
            comment: ''
        }
    })

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
        updateItemQuantity(id, newQuantity)
      }

    const onSubmit = (data: CheckoutFormValues) => {
        console.log(data)
    }

    const vatPrice = (totalAmount * VAT) / 100
    const  finalPrice = totalAmount + vatPrice + DELIVERY_PRICE

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]"/>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <WhiteBlock title="1. Корзина" className="flex flex-col gap-5">
                                {
                                    items.map((item) => (
                                        <CheckoutItem
                                            key={item.id}
                                            details={
                                                item.pizzaSize && item.pizzaType
                                                ? getCartItemDetails(
                                                    item.ingredients,
                                                    item.pizzaType as PizzaType,
                                                    item.pizzaSize as PizzaSize
                                                )
                                                : ""
                                            }
                                            disabled={item.disabled}
                                            id={item.id}
                                            imageUrl={item.imageUrl}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                            onClickRemove={() => removeCartItem(item.id)}
                                    /> 
                                    ))
                                }
                            </WhiteBlock>
                            <WhiteBlock title="2. Персональные данные">
                                <div className="grid grid-cols-2 gap-5">
                                    <FormInput name="firstName" className="text-base" placeholder="Имя"/>
                                    <FormInput name="lastName" className="text-base" placeholder="Фамилия"/>
                                    <FormInput name="email" className="text-base" placeholder="E-mail"/>
                                    <FormInput name="phone" className="text-base" placeholder="Телефон"/>
                                </div>
                            </WhiteBlock>
                            <WhiteBlock title="3. Адрес доставки">
                                <div className="flex flex-col gap-5">
                                    <FormInput name="adress" className="text-base" placeholder="Введите адрес"/>
                                    <Textarea className="text-base" placeholder="Комментарий к заказу" rows={5}/>
                                </div>
                            </WhiteBlock>
                        </div>

                        <div className="w-[450px]">
                            <WhiteBlock title="3. Адрес доставки">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xl">Итого: </span>
                                    <span className="text-[34px] font-extrabold">{finalPrice} ₽</span>
                                </div>
                                <CheckoutItemDetails title={
                                    <div className="flex items-center">
                                        <Package size={18} className="mr-2 text-gray-400"/>
                                        Стоимость товаров:
                                    </div>
                                } value={totalAmount}/>
                                <CheckoutItemDetails title={
                                    <div className="flex items-center">
                                        <Percent size={18} className="mr-2 text-gray-400"/>
                                        Налоги:
                                    </div>
                                } value={vatPrice}/>
                                <CheckoutItemDetails title={
                                    <div className="flex items-center">
                                        <Truck size={18} className="mr-2 text-gray-400"/>
                                        Доставка:
                                    </div>
                                } value={DELIVERY_PRICE}/>
                                <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
                                    Перейти к оплате
                                    <ArrowRight className="w-5 ml-2"/>
                                </Button>
                            </WhiteBlock>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
 }
  