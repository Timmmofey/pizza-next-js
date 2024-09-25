import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { PizzaImage } from "./pizza-image"; 
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import {
    mapPizzaType,
  PizzaSize,
  PizzaSizes,
  PizzaType,
  PizzaTypes,
} from "../../../shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
// import { calcTotalPizzaPrice } from "@/lib";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  className?: string;
  inclickAddCart?:  (itemId: number, ingredients: number[]) => void;
  loading?: boolean
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  className,
  loading,
  inclickAddCart,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredietnt }] = useSet(
    new Set<number>([])
  );  

  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0
  const totalIngredientsPrice = ingredients.filter((ingredient => selectedIngredients.has(ingredient.id))).reduce(
    (acc, ingredient) => acc + ingredient.price, 0
  )
  const totalPrice = pizzaPrice + totalIngredientsPrice
  // const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;
  
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type)
  const availablePizzaSizes = PizzaSizes.map((item)=> ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value))
  }))

  const currentItemId = items.find(item => item.pizzaType === type && item.size === size)?.id
  
  useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find((item) => Number(item.value) === size && !item.disabled)
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled)

    if (!isAvailableSize && availableSize) {
        setSize(Number(availableSize.value) as PizzaSize)
    }
  }, [type])
  
  const handleClickAdd = () => {
    if (typeof(currentItemId) === "number"){
      inclickAddCart!(currentItemId, Array.from(selectedIngredients))
    }
  }

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-5 mb-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={PizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[430px] overflow-auto scrollbar my-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={()=> addIngredietnt(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button loading={loading} className="h-[55px] px-10 text-base rounded-[18px] w-full" onClick={handleClickAdd} >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
