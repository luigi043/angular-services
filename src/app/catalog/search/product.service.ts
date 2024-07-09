import { Product } from "@shared/product.model";
import { productsArray } from "@catalog/products-data";


export class ProductService { 
    getProduts(): Product[]{
        return productsArray;
    }
}