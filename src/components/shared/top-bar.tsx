import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container';
import { SortPopup } from './sort-pop-up';
import { Categories } from './categories';
import { Category } from '@prisma/client';

type Props = {
    className?: string;
    categories: Category[]
}

export const TopBar:React.FC<Props> = ({categories ,className}) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5 shadow-black/5 z-10", className)}>
        <Container>
            <Categories items={categories}/>
            <SortPopup/>
        </Container>
    </div>
  )
}