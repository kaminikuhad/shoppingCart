import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  @ViewChild("searchText")
  private Component1: HeaderComponent;
  searchText: any;
  productList: any[] = [{
    image: "/assets/image1.jpg",
    title: "Coombes",
    Subtitle: "Lounge",
    Price: "2600",
    description: "A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on, if you can't reach something. They usually have four legs to support the weight. Some types of chairs, such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
    star: 5
  },
  {
    image: "/assets/image2.jpg",
    title: "Keeve Set",
    Subtitle: "Tabel Chair",
    Price: "590",
    description: "A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on, if you can't reach something. They usually have four legs to support the weight. Some types of chairs, such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
    star: 4
  },
  {
    image: "/assets/image3.jpg",
    title: "Kappu",
    Subtitle: "Shelves",
    Price: "420",
    description: "A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on, if you can't reach something. They usually have four legs to support the weight. Some types of chairs, such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
    star: 3
  },
  {
    image: "/assets/image4.jpg",
    title: "Momo",
    Subtitle: "Shelves",
    Price: "17000",
    description: "A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on, if you can't reach something. They usually have four legs to support the weight. Some types of chairs, such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
    star: 4
  }]
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }
  navigate(data) {
    this.productService.setDetails(data);
    this.router.navigate(['/productDetails'])
  }
  //   ngAfterViewChecked() {
  //     this.searchText = this.Component1.searchText;
  // }
  manage() {
    console.log(this.Component1.searchText)

    console.log(this.searchText)
  }
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 600;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value: any;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
