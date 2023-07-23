import { Component } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public catalogueService:CatalogueServiceService) {};
}
