import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/errors";


export class BooksMiddlewares {


    isBookIdValid(req: Request, res: Response, next: NextFunction): Response | void {
        const index = booksDatabase.findIndex(product => product.id === Number(req.params.id));

        if (index === -1) {
            throw new AppError(404, "Book not found.");
        }

        res.locals.bookIndex = index;

        return next();
    }

    isBookNameExistent(req: Request, res: Response, next: NextFunction): Response | void {

        if(booksDatabase.some(product => product.name === req.body.name)){

            throw new AppError(409, "Book already registered.");
        }

        return next();
    };
}
