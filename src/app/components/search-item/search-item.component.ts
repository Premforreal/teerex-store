import { Component } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  searchItem: string = '';
  
  constructor(
    private catalogueService:CatalogueServiceService,
    private searchService:SearchService
    ) {};

  // search(){
  //   this.catalogueService.searchItems(this.searchItem);
  //   this.searchItem='';
  // };

  search(){
    this.searchService.searchItems(this.searchItem);
    this.searchItem='';
  };
}