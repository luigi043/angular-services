import { Component } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductService } from './search/product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = productsArray;
  private cart: Product[] = [];

  constructor(private productsService:  ProductService) {
    this.productsService = productsService;
    this.products = new ProductService().getProduts();
   }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
