import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit{
  products: Product[] = []
  searchTerm: string = '';
  cart: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
    this.productsService.getProduts().subscribe((products) => this.products = products);
    setTimeout(() =>  this.productsService.refreshProducts(), 200);
   }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
