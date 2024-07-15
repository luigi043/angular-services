import { Product } from "@shared/product.model";
import { productsArray } from "@catalog/products-data";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable({ providedIn: 'root'})
export class ProductsService { 
    private products: Subject<Product[]> = new Subject();

    getProduts(): Observable<Product[]>{
        return this.products;
    }
    refreshProducts(){
        this.products.next(productsArray);
    }
}