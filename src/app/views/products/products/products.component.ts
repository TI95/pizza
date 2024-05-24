import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";

@Component({
  selector: 'app-products-card',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService, private http: HttpClient,
            //   private cartService: CartService,
               private router: Router) {
  }


  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.loading = true
    this.productService.getProducts()
      .pipe(
        tap(() => {
      this.loading = false
    })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next')
          },
          error: (error) => {
            console.log(error)
            this.router.navigate(['/'])
          }
        }
      )
  }

  /*  addToCart(title: string): void {
      this.cartService.products-card = title;
      this.router.navigate(['/order'], {queryParams: {products-card: title}})
    }*/

}
