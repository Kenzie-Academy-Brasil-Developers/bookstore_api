import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { BooksMiddlewares } from "../middlewares/books.middlewares";

export const booksRouter = Router();

const booksControllers = new BooksController();

const booksMiddlewares = new BooksMiddlewares();

booksRouter.post("/", booksMiddlewares.isBookNameExistent,  booksControllers.createProduct );

booksRouter.get("/", booksControllers.getProducts );

booksRouter.use("/:id", booksMiddlewares.isBookIdValid)

booksRouter.get("/:id", booksControllers.retrieveProduct )

booksRouter.patch("/:id", booksMiddlewares.isBookNameExistent, booksControllers.updateProduct )

booksRouter.delete("/:id", booksControllers.deleteProduct )

