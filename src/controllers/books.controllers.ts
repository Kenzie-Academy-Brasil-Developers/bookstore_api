import { Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { ProductServices } from "../services/books.services";

export class BooksController {
    private productService = new ProductServices();

    createProduct = (req: Request, res: Response): Response => {
        const newProduct = this.productService.createProduct(req.body);

        return res.status(201).json(newProduct);
    };

    getProducts = (req: Request, res: Response): Response => {
    
        const desiredBook = this.productService.getProducts(req.query.search as string);

        return res.status(200).json(desiredBook);

    }

    retrieveProduct = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;

        return res.status(200).json(booksDatabase[index]);
    }

    updateProduct = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;

        const updatedProduct = this.productService.updateProduct(index, req.body);

        return res.status(200).json(updatedProduct)
    }

    deleteProduct = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;

        this.productService.deleteProduct(index);

        return res.status(204).send();
    }

}