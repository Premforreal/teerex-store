import {  Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:any;
  @Output() addToCartEvent = new EventEmitter<any>();
  @Output() removeFromCartEvent = new EventEmitter<any>();

  addToCart() {
    this.addToCartEvent.emit(this.product.id);
  }

  removeFromCart() {
    this.removeFromCartEvent.emit(this.product.id);
  }
}
