import { Ingredient } from "@prisma/client"
import { Api } from "../services/api-client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"

interface ReturnProps {
    ingredients: Ingredient[]
    loading: boolean
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
}

export const useFilterIngredients = (ids: string[] = []): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]) 
    const [loading, setLoading] = useState(true)
    const [selectedIngredients, {toggle}] = useSet(new Set<string>(ids))

    useEffect(() => {
        async function fetchIngredients() {
            try{
                const  ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients) 
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return {ingredients, loading, onAddId: toggle, selectedIngredients}
}