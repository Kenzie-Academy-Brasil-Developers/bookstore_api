import { z } from "zod";

const bookSchema = z.object({
    id: z.number(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

const createBookSchema = bookSchema.pick({
    name: true,
    pages: true,
    category: true,
})

const querySchema = bookSchema.partial();


const updateBookSchema = createBookSchema.partial();


export { bookSchema, createBookSchema, updateBookSchema, querySchema};