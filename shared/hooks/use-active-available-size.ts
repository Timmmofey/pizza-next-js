// import { Variant } from "@/components/shared/group-variants"
// import { useEffect } from "react"
// import { PizzaSize, PizzaType } from "../constants/pizza"

// export const useActiveAvailableSize = (type: PizzaType,size: PizzaSize, availablePizzaSizes: Variant[]) => {
//     useEffect(() => {
//         const isAvailableSize = availablePizzaSizes?.find((item) => Number(item.value) === size && !item.disabled)
//         const availableSize = availablePizzaSizes?.find((item) => !item.disabled)
    
//         if (!isAvailableSize && availableSize) {
//             setSize(Number(availableSize.value) as PizzaSize)
//         }
//       }, [type])
// }