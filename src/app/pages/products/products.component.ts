import { Component } from '@angular/core';
import { CatalogueServiceService } from '../../services/catalogue-service.service';
import { SearchService } from '../../services/search.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  catalogue:any;
  searchItem:any;
  filterAttributes:any;
  filterKeys:any;
  
  constructor(
    public catalogueService:CatalogueServiceService,
    public searchService: SearchService,
    public filterService: FilterService
    ) {};

  ngOnInit() {
    this.getData();
  };

  isNumber(val:any): boolean { return typeof val === 'number'; }

  getData(): void {
    this.catalogueService.fetchData()
    .subscribe((response: any)=>{
        this.catalogue = response;
        this.filterAttributes = this.filterService.getFilterAttributes(this.catalogue);
        this.filterKeys = Object.keys(this.filterAttributes);
      }
    );
  };

  addToCart(id: number) {
    this.catalogueService.addItemsCart(id);
  };

  search(){
    if (!this.searchItem) {
      this.getData();
    }
    // this.catalogue = this.searchService.searchItems(this.searchItem, this.catalogueService.products);
    this.catalogueService.products = this.searchService.searchItems(this.searchItem, this.catalogueService.products);
  };

  applyFilters(){
    // this.catalogue = this.filterService.filterItems(this.catalogueService.products);
    this.catalogueService.products = this.filterService.filterItems(this.catalogueService.products);
  };
}
