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
  cartTotal:number=0;
  products:any;
  filteredData:any;
  
  fetchData(){
    return this.http.get<any>(this.api).pipe(
      tap(response => {
        this.products = response;
      })
    );
  };

  calculateCartTotal(){
    this.cartTotal=0
    this.cartItems.map((item:any)=>{
      this.cartTotal+=item.price*item.quantity;
    });
  };

  addItemsCart(id: number) {
    try {
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
        console.error('Item is not available!');
      }
    }
    catch(err) {
      console.error('Item is not available!');
    }
    finally {
      this.calculateCartTotal();
    }
  };

  removeFromCart(id:number){
    try{
      this.cartItems = this.cartItems.filter((item:any)=>{
        if (item.id!==id) {
          return true;
        }
        return false;
      });
    }
    catch(err){
      console.error(err);
    }
    finally {
      this.calculateCartTotal();
    }
  };

  removeOneItem(id:number){
    try{
      this.cartItems = this.cartItems.map((item:any)=>{
        if (item.id==id){ 
          if(item.quantity>0) {
            item.quantity--; 
          }else{
            throw new Error('error removing item!');
          }
        }
        return item;
      });
    }
    catch(err){
      console.error(err);
    }
    finally {
      this.calculateCartTotal();
    }
  };

  addOneItem(id:number){
    try{
      const cartItem = this.products.find((p: any) => p.id === id);
      this.cartItems = this.cartItems.map((item:any)=>{
        if (item.id==id) {
          if(item.quantity<cartItem.quantity){
            item.quantity++;
          }
          else{
            throw new Error('error! quantity exceeded!!');
          }
        }
        return item;
      });
    }
    catch(err){
      console.error(err);
    }
    finally {
      this.calculateCartTotal();
    }
  };

}