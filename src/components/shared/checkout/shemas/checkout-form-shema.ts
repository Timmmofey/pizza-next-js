import {z} from 'zod'

export const checkoutFormSchema  = z.object({
    firstName: z.string().min(2, {message: 'Имя должно содержать не менее 2-ух символов'}),
    lastName: z.string().min(2, {message: 'Имя должно содержать не менее 2-ух символов'}),
    email: z.string().email({message: 'Введите конкретную почту'}),
    phone: z.string().min(10, {message: "Введите корректный номер телефона"}),
    adress: z.string().min(5, {message: "Введите корректный адрес"}),
    comment: z.string().optional()
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>