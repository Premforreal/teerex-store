import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {

  constructor(private http: HttpClient) { }
  api : string = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
  cartItems:any = [];
  products:any;
  filteredData:any;
  
  fetchData(){
    return this.http.get<any>(this.api).pipe(
      tap(response => {
        this.products = response;
      })
    );
  };

  getCartItems(){
    return this.cartItems;
  };

  addItemsCart(id: number) {
    const cartItem = this.products.find((p: any) => p.id === id && p.quantity > 0);
  
    if (cartItem) {
      const existingItem = this.cartItems.find((item: any) => item.id === id);
      if (existingItem && existingItem.quantity < cartItem.quantity) {
        existingItem.quantity++;
      } 
      else if (!existingItem) {
        const newItem = { ...cartItem, quantity: 1 };
        this.cartItems.push(newItem);
      } 
      else {
        console.error('Item quantity limit exceeded');
      }
    } 
    else {
      console.error('Invalid item');
    }
  };

  removeFromCart(id:number){
    this.cartItems = this.cartItems.filter((item:any)=>{
      if (item.id!==id) {
        return true;
      }
      return false;
    });
  };

  removeOneItem(id:number){
    this.cartItems = this.cartItems.map((item:any)=>{
      if (item.id==id && item.quantity>0) {
          item.quantity--; 
        }else{
          console.error('error');
        }
      return item;
    });
  };

  addOneItem(id:number){
    const cartItem = this.products.find((p: any) => p.id === id);
    this.cartItems = this.cartItems.map((item:any)=>{
      if (item.id==id && item.quantity<cartItem.quantity) {
          item.quantity++; 
        }else{
          console.error('error');
        }
      return item;
    });
  };

  // searchItems(searchItem:string){
  //   console.log(searchItem);
  //   console.log(this.products);
  //   this.filteredData = this.products.filter((item:any)=>{
  //     if (item.id==parseInt(searchItem)) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   console.log(this.filteredData);
  // };

}