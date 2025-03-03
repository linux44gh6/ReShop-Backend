import { z } from "zod";

const productSchema=z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    price: z.number().min(1, 'Price is required'),
    condition: z.string().min(1, 'Condition is required'),
    images: z.array(z.string()).optional(),
    userID: z.string().min(1, 'User ID is required'),
})

export const productValidation={
    productSchema
}