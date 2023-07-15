import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product:any;

  constructor(private service:CatalogueServiceService) {};

  removeFromCart(id:number){
    this.service.removeFromCart(id);
  };
  removeOneItem(id:number){
    if(this.product.quantity==1){
      this.service.removeFromCart(id);
    }
    this.service.removeOneItem(id);
  };
  addOneItem(id:number){
    this.service.addOneItem(id);
  };
}
