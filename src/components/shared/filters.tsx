"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { CheckBoxFiltersGroup } from "@/components/shared/checkout/checkbox-filters-group";
import { Title } from "./title";
import { RangeSlider } from "../shared/range-slider";
import { useIngredients } from "../../../shared/hooks/useIngredients";
import { useFilters } from "../../../shared/hooks/useFilters";
import { useQueryFilters } from "../../../shared/hooks/useQueryFilters";

interface Props {
  className?: string;
}

// interface PriceProps {
//   priceForm?: number;
//   priceTo?: number;
// }

// interface QueryFilters extends PriceProps {
//   pizzaTypes: string;
//   sizes: string;
//   ingredients: string;
// }

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients, loading} = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)
  
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceForm', prices[0])
    filters.setPrices('priceTo', prices[1])
  } 
  
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckBoxFiltersGroup
        title="Тип теста"
        name="pizzaType"
        className="mb-5"
        selected={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        onClickCheckbox={filters.setPizzaTypes}
      />

      <CheckBoxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={filters.setPizzaSizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            value={String(filters.prices.priceForm)}
            onChange={(e) => filters.setPrices("priceForm", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={5000}
            placeholder="5000"
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[filters.prices.priceForm || 0 , filters.prices.priceTo || 5000]}
          onValueChange={updatePrices}
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
