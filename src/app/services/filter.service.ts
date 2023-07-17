import { Injectable } from '@angular/core';
import { CatalogueServiceService } from './catalogue-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  gender:any = new Set<string>();
  color:any  = new Set<string>();
  price:any  = new Set<number>();
  type:any   = new Set<string>();

  filterAttributes = {
    gender : this.gender, 
    color :this.color,
    price:this.price,
    type:this.type
  };

  filterValues:any = {
    gender : new Set<string>(), 
    color : new Set<string>(),
    price: new Set<number>(),
    type: new Set<string>()
  };

  constructor(
    private catalogueService :CatalogueServiceService,
  ) {}

  getFilterAttributes(products:any){
    products.map((p:any)=>{
      this.filterAttributes.gender.add(p.gender);
      this.filterAttributes.color.add(p.color);
      this.filterAttributes.price.add(p.price);
      this.filterAttributes.type.add(p.type);
    });
    // this.filterAttributes = {
    //   gender: [...this.gender],
    //   color: [...this.color],
    //   price: [...this.price],
    //   type: [...this.type]
    // };
    return this.filterAttributes;
  };

  onCheckboxChange(event:any){
    const key = event.target.name;
    event.target.checked
      ? this.filterValues[key].add(event.target.value)
      : this.filterValues[key].delete(event.target.value);
      console.log(this.filterValues);
  };

}