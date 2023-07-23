import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor() { }

  searchItems(searchItem:string, products:any){
    products = products.filter((item:any)=>{
      if (
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.color.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    return products;
  };

}
