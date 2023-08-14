import { Component, OnInit } from '@angular/core';
import { Iproduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ProductTaskIOAndLikeTask';
  public ProdArray : Array<Iproduct> = []

  constructor() {
   
  }

 ngOnInit(): void {
   let data = localStorage.getItem("addPrdCatl")
   if(data !== null){
    this.ProdArray = JSON.parse(data)
   }
 }

ongettingProdCatl(prd:Iproduct){
  this.ProdArray.push(prd)
  localStorage.setItem("addPrdCatl",JSON.stringify(this.ProdArray))
}
}
