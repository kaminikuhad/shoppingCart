import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails:any;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productDetails = this.productService.getDetails();
    console.log(this.productDetails)
  }

}
