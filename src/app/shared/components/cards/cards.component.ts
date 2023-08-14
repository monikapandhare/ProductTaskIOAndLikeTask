import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() getProduct! : Array<Iproduct>;

  constructor() {
   
   }

  ngOnInit(): void {
    
  }
  

}
