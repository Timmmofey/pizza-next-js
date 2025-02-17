"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import { Api } from "../../../shared/services/api-client";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  // React.useEffect(() => {
  //   Api.products.search(searchQuery).then((items) => {
  //     setProducts(items);
  //     console.log(products);
  //     console.log(products.length);
  //     if (Array.isArray(items)) {
  //       console.log('items является массивом:', items);
  //     }
  //   });
  // }, [searchQuery]);

  useDebounce(() => {
    Api.products.search(searchQuery).then((items) => {
      // Если API вернул объект, а не массив
      if (!Array.isArray(items)) {
        // Попробуем извлечь массив, если items является объектом
        if (items && typeof items === 'object') {
          // Найдем первое свойство, которое является массивом
          const possibleArray = Object.values(items).find(value => Array.isArray(value));
          if (possibleArray) {
            items = possibleArray;
          } else {
            console.error("API response structure is unexpected:", items);
            items = []; // В случае неожидаемого ответа возвращаем пустой массив
          }
        } else {
          console.error("API response is not an object or array:", items);
          items = []; // Если это не объект и не массив, тоже возвращаем пустой массив
        }
      }
  
      setProducts(items);
    });
  }, 250, [searchQuery]);
  
  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
  }

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30"
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-190 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.length > 0 ? (
          products.map((product) => (
            <Link
              onClick={()=>{onClickItem}}
              key={product.id}
              href={`/products/${product.id}`}
              className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
            >
              <img
                className="rounded-sm"
                src={product.imageUrl}
                width={32}
                height={32}
                alt={product.name}
              />
              <span>{product.name}</span>
            </Link>
          ))
        ) : (
          <div className="px-3 py-2">Продукты не найдены</div>
        )}
        </div>
      </div>
    </>
  );
};
