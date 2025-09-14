import { z } from 'zod'

export const userInsertSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Name is required" }),
})