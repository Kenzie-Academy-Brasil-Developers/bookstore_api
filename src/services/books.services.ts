import { booksDatabase, generateId } from "../database/database";
import { CreateProduct, IProduct, UpdateProduct } from "../interfaces/books.interfaces";

export class ProductServices {
    getProducts(){
        return booksDatabase;
    }

    getOneProduct(id: string){
        const findProduct = booksDatabase.find(product => product.id === Number(id));

        return findProduct;
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

    updateProduct(id: string, data: UpdateProduct ): IProduct {
        const index = booksDatabase.findIndex(product => product.id === Number(id));

        booksDatabase[index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        }
        return booksDatabase[index];
    }

    deleteProduct(id: string): void{
        const index = booksDatabase.findIndex(product => product.id === Number(id));

            booksDatabase.splice(index, 1)
    }

}