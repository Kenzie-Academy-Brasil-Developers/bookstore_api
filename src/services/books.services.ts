import { booksDatabase, generateId } from "../database/database";
import { CreateBook, Book, UpdateBook } from "../interfaces/books.interfaces";

export class ProductServices {
    getProducts(){
        return booksDatabase;
    }

    getOneProduct(index: number){

        return booksDatabase[index];
    }

    createProduct(data: CreateBook){
        const newProduct: Book = {
            id:generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        booksDatabase.push(newProduct)

        return newProduct;
    }

    updateProduct(index: number, data: UpdateBook ): Book {

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        }
        return booksDatabase[index];
    }

    deleteProduct(index: number): void{

            booksDatabase.splice(index, 1)
    }

}