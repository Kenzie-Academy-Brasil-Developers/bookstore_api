interface IProduct{
    id: number,
    name: string, 
    pages: number,
    category?: string,
    createdAt: Date,
    updatedAt: Date
}

type CreateProduct = Pick<IProduct, "name" | "pages" | "category">;

type UpdateProduct = Partial<CreateProduct>;

export { IProduct, CreateProduct, UpdateProduct}

