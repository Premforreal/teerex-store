import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product:any;

  constructor(private catalogueService:CatalogueServiceService) {};

  removeFromCart(id:number){
    this.catalogueService.removeFromCart(id);
  };
  removeOneItem(id:number){
    if(this.product.quantity==1){
      this.catalogueService.removeFromCart(id);
    }
    this.catalogueService.removeOneItem(id);
  };
  addOneItem(id:number){
    this.catalogueService.addOneItem(id);
  };
}
