import { Book } from "../interfaces/books.interfaces";

export const booksDatabase: Book[] = [];

let id = 0;

export const generateId = () => {
    id++;

    return id;
}