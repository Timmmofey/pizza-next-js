"use client";

import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { CheckBoxFiltersGroup } from "@/components/shared/checkout/checkbox-filters-group";
import { Title } from "./title";
import { RangeSlider } from "../shared/range-slider";
import { useFilterIngredients } from "../../../hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceForm?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();

  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients(searchParams.get("ingredients")?.split(","));

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const [prices, setPrice] = useState<PriceProps>({
    priceForm: Number(searchParams.get("priceForm")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`);
  }, [prices, pizzaTypes, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckBoxFiltersGroup
        title="Тип теста"
        name="pizzaType"
        className="mb-5"
        selected={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        onClickCheckbox={togglePizzaTypes}
      />

      <CheckBoxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={toggleSizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={String(prices.priceForm)}
            onChange={(e) => updatePrice("priceForm", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={30000}
            placeholder="30000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[prices.priceForm || 0, prices.priceTo || 0]}
          onValueChange={([priceForm, priceTo]) =>
            setPrice({ priceForm, priceTo })
          }
        />
      </div>

      <CheckBoxFiltersGroup
        title="Ингридиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
