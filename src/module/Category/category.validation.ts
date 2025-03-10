import { z } from "zod";

const CategoryValidationSchema = z.object({
    name: z.string().min(1, 'Title is required'),
    icon: z.array(z.string()).optional(),
})

export const CategoryValidation={
    CategoryValidationSchema
}