import { AnyZodObject, z} from "zod";
import { bookSchema, createBookSchema, querySchema, updateBookSchema } from "../schemas/books.schemas";

type Book = z.infer<typeof bookSchema>

type CreateBook = z.infer<typeof createBookSchema>

type UpdateBook = z.infer<typeof updateBookSchema>


interface RequestSchema {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}


export { Book , CreateBook, UpdateBook, RequestSchema}

