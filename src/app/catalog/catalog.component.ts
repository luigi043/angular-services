import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './search/products.service';
import { CartService } from '@core/cart.service';
import { Observable } from 'rxjs';

export  const CART_SERVICE_TOKEN = new InjectionToken<CartService>("CartService");

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Observable<Product[]> = this.productsService.getProduts();

  constructor(
    private productsService: ProductsService,
    private cartService: CartService) {
   }
  

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
