import { Inject, Injectable } from "@angular/core";
import { IProductsService } from "@shared/product-service.interface";
import { Product } from "@shared/product.model";
import { Observable, of } from "rxjs";
import { engineers } from "./squad-catalog/engineers";

@Injectable({ providedIn: 'root'})
export class EngineersService implements IProductsService{
     getProducts(): Observable<Product[]> {
         return of(engineers);
     }
}