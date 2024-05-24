import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent   {

  @Input() product: ProductType; /*= {} as ProductType*/
  /*@Input()
  get products-card():ProductType {return  this._product};
  set products-card(param: ProductType){
    param.title = param.title.toUpperCase();
    this._product = param;
  }*/

  /*  private _product:ProductType;*/
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef

  constructor(public CartProductService: CartProductService) {

    /*this._product*/
    this.product = {
      id:0,
      image: '',
      title: '',
      description: ''
    }

  }


}
