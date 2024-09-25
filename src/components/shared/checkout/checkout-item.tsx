'use client'

import { cn } from "@/lib/utils";
import { CartItemProps } from "../cart-item-details/cart-item-details.types";
import { CountButtonProps } from "../count-button";
import { CartItemDetailsImage } from "../cart-item-details/cart-item-details-image";
import { CartItemInfo } from "../cart-item-details/cart-item-info";
import { CartItemDetailsPrice } from "../cart-item-details/cart-item-details-price";
import { CartItemDetailsCountButton } from "../cart-item-details/cart-item-details-count-button";
import { X } from "lucide-react";

interface Props extends CartItemProps {
    onClickRemove?: () => void;
    onClickCountButton?: (type: 'plus' | 'minus') => void;
}

export const CheckoutItem: React.FC<Props> = ({
    name,
    price,
    imageUrl,
    quantity,
    details,
    disabled,
    className,
    onClickRemove,
    onClickCountButton
}) => {
    return (
        <div className={cn('flex items-center justify-between', className)}>
            <div className={cn("flex items-center gap-5 flex-1", { "opacity-50 pointer-events-none": disabled }, className)}>
                <CartItemDetailsImage src={imageUrl}/>
                <CartItemInfo className="" name={name} details={details}/>
            </div>
            <CartItemDetailsPrice value={price}/>
            <div className="flex items-center gap-5 ml-20">
                <CartItemDetailsCountButton onClick={onClickCountButton} value={quantity}/>
                <X onClick={onClickRemove} className="text-gray-400 cursor-pointer hover:text-gray-600"/>
            </div>
        </div>
    )
}