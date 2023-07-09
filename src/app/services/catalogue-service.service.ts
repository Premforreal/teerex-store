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
  
  fetchData(){
    return this.http.get<any>(this.api).pipe(
      tap(response => {
        this.products = response;
      })
    );
  };

  // addItemsCart(id:number){
  //   console.log(this.cartItems);
  //   const cartItem = this.products.filter((p:any)=>{
  //     if (p.id==id && p.quantity>0) {
  //       return p;    
  //     }
  //   })[0];
  //   this.cartItems .map((item:any)=>{
  //     if(item.id==id && item.quantity<cartItem.quantity){
  //       this.cartItems.push(cartItem); 
  //     }else{
  //       //give error
  //     }
  //   });
  //   console.log(this.cartItems);
  // };

  addItemsCart(id: number) {
    console.log(this.cartItems);
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
    console.log(this.cartItems);
  };

  getCartItems(){
    return this.cartItems;
  };
}
