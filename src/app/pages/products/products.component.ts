import { Component } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  catalogue:any;
  
  constructor(private service:CatalogueServiceService) {};

  ngOnInit() {
    this.getData();
  };

  getData(): void {
    this.service.fetchData()
    .subscribe((response: any)=>{
        this.catalogue = response;
      }
    );
  };

  addToCart(id: number) {
    this.service.addItemsCart(id);
    // const itemToBeAdded = this.catalogue.filter((item:any)=>item.id==itemId)[0];
  };

}
