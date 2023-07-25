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
  sliderValue:any=0;
  
  constructor(
    public catalogueService:CatalogueServiceService,
    public searchService: SearchService,
    public filterService: FilterService
    ) {};

  ngOnInit() {
    this.getData();
  };

  isNumber(val:any): boolean { return typeof val === 'number'; }

  max(values: number[]): number {
      return Math.max(...values);
  };

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
    this.catalogue = this.searchService.searchItems(this.searchItem, this.catalogueService.products);
  };

  applyFilters(){
    this.catalogue = this.filterService.filterItems(this.catalogueService.products);
  };

  onSliderChange(event:any) {
    this.sliderValue = parseInt(event.target.value);
    const key = event.target.name;
    this.filterService.filterValues[key] = new Set([this.sliderValue]);
  };

}
