import { Product } from 'src/app/interface/Product';
import { products } from './../../data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products = products
  public productName = "";
  public newProdudcts: Product[] = []
  public ngOnInit(): void {
    this.filterProduct()
  }
  filterProduct(): void {
    if (this.productName.trim() == "") {
      this.newProdudcts = this.products
    } else {
      this.newProdudcts = this.products.filter(product => product.name.toLowerCase().includes(this.productName.toLowerCase()))
    }
  }
}
