import { Ingredient } from "@prisma/client"
import { Api } from "../services/api-client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"

interface ReturnProps {
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
}

export const useFilterIngredients = (ids: string[] = []): ReturnProps => {
    const [selectedIngredients, {toggle}] = useSet(new Set<string>(ids))

   

    return {onAddId: toggle, selectedIngredients}
}