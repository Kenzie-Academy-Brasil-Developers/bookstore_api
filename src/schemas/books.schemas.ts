import { z } from "zod";
// interface IProduct{
//     id: number,
//     name: string, 
//     pages: number,
//     category?: string,
//     createdAt: Date,
//     updatedAt: Date
// }

// type CreateProduct = Pick<IProduct, "name" | "pages" | "category">;

// type UpdateProduct = Partial<CreateProduct>;

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

const updateBookSchema = createBookSchema.partial();


export { bookSchema, createBookSchema, updateBookSchema};