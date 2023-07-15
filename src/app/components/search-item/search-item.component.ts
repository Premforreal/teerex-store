import { Component } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  searchItem: string = '';
  
  constructor(private service:CatalogueServiceService) {};

  search(){
    this.service.searchItems(this.searchItem);
    this.searchItem='';
  };
}