import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor() { }

  searchItems(searchItem:string, products:any){
//  name 
//  colour 
//  type
// green polo
    console.log(searchItem);
    console.log(products);
    products = products.filter((item:any)=>{
      // return (item.color.toLowerCase() == searchItem.toLowerCase());
      if (
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.color.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    console.log(products);
    return products;
  };

}
