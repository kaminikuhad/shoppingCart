import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productDetails: any;
  constructor() { }

  getDetails(){
    return this.productDetails;
  }
  setDetails(data){
this.productDetails = data;
  }
}
