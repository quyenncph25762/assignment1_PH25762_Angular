import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/products';
import { Product } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  products: Product[] = products;
  product: any
  constructor(private route: ActivatedRoute) {
    let id = this.route.snapshot.params['id'];
    this.product = this.products.find(pro => pro.id === id)
  }
}
