import { IProduct } from "../interfaces/books.interfaces";

export const booksDatabase: IProduct[] = [];

let id = 0;

export const generateId = () => {
    id++;

    return id;
}