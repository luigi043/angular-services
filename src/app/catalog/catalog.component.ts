import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './search/products.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit{
  products: Product[] = [];
  private cart: Product[] = [];

  constructor(private productsService: ProductsService) {
   }
   ngOnInit() {
    
    this.productsService.getProduts().subscribe((products) => this.products = products);
    setTimeout(() =>  this.productsService.refreshProducts(), 200);
   }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
