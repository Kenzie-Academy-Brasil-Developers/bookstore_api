import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { BooksMiddlewares } from "../middlewares/books.middlewares";
import { HandleErrors } from "../errors/handleErrors.middleware";
import { createBookSchema, updateBookSchema } from "../schemas/books.schemas";

export const booksRouter = Router();

const booksControllers = new BooksController();

const booksMiddlewares = new BooksMiddlewares();

const handleErrors = new HandleErrors();

booksRouter.post("/", handleErrors.validateBody({ body: createBookSchema}), booksMiddlewares.isBookNameExistent,  booksControllers.createProduct );

booksRouter.get("/", booksControllers.getProducts );

booksRouter.use("/:id", booksMiddlewares.isBookIdValid)

booksRouter.get("/:id", booksControllers.retrieveProduct )

booksRouter.patch("/:id", handleErrors.validateBody({ body: updateBookSchema}), booksMiddlewares.isBookNameExistent, booksControllers.updateProduct )

booksRouter.delete("/:id", booksControllers.deleteProduct )

