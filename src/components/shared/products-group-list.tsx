'use client'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-card'
import { useCategoryStore } from '@/store/category'

interface Props {
    title: string
    // products: CategoryProdcts['products']
    items: any[]
    className?: string
    categoryId: number
    listClassName?: string
}

export const ProductGroupList: React.FC<Props> = ({ 
    title,
    items,
    className,
    categoryId,
    listClassName
 }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/>

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {
                    items.map((product) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id} 
                            name={product.name} 
                            price={product.items[0]?.price} 
                            // price={product.items.price} 
                            imageUrl={product.imageUrl}/>
                    ))
                },
                
            </div>
        </div>
    )
}