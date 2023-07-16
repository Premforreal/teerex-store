import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  products:any;
  filteredData:any;

  constructor() { }

  searchItems(searchItem:string){
    console.log(searchItem);
    console.log(this.products);
    this.filteredData = this.products.filter((item:any)=>{
      if (item.id==parseInt(searchItem)) {
        return true;
      }
      return false;
    });
    console.log(this.filteredData);
  };

}
