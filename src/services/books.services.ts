import { booksDatabase, generateId } from "../database/database";
import { CreateProduct, IProduct, UpdateProduct } from "../interfaces/books.interfaces";

export class ProductServices {
    getProducts(){
        return booksDatabase;
    }

    getOneProduct(index: number){

        return booksDatabase[index];
    }

    createProduct(data: CreateProduct){
        const newProduct: IProduct = {
            id:generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        booksDatabase.push(newProduct)

        return newProduct;
    }

    updateProduct(index: number, data: UpdateProduct ): IProduct {

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