const mapPizzaSize = {
    20: 'Маленькая',
    30: 'Средняя',
    40: 'Большая',
} as const

const mapPizzaType = {
    1: 'традиционная',
    2: 'тонкая'
} as const

const PizzaSizes = Object.entries(mapPizzaSize).map(([value, name])=> ({
    name,
    value,
}))

const PizzaTypes = Object.entries(mapPizzaType).map(([value, name])=> ({
    name,
    value,
}))

export type PizzaSize = keyof typeof mapPizzaSize
export type PizzaType = keyof typeof mapPizzaType

export {mapPizzaSize, mapPizzaType, PizzaSizes, PizzaTypes}