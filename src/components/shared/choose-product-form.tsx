import { cn } from "@/lib/utils";
import React from "react"; 
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
    imageUrl: string
    name: string
    price: number
    className?: string
    inclickAdd?: VoidFunction
    loading?: boolean
}

export const ChooseProductForm: React.FC<Props> = ({
    imageUrl,
    name,
    className,
    price,
    loading,
    inclickAdd
}) => {

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img 
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                    src={imageUrl}
                    alt={name} 
                />
            </div>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>
                <Button
                className="h-[55px] px-10 text-base rounded-[18px] w-full"
                onClick={inclickAdd}
                loading={loading}
                >
                    Добавить в корзину за {price} ₽
                </Button>
            </div>
        </div>
    )
}