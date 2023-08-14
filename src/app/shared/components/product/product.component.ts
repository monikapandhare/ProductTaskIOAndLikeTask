import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Iproduct } from '../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 @Output() gettingProdCatl : EventEmitter<Iproduct> = new EventEmitter<Iproduct>()
 @ViewChild("PName")pn! : ElementRef;
 @ViewChild("Pdescription")pd! : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onAddPrd(){
    let prod : Iproduct = {
      PName: this.pn.nativeElement.value,
      pDescription: this.pd.nativeElement.value,
      pCategory: 'product'
    }
    console.log(prod)
    this.gettingProdCatl.emit(prod)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your product has been added',
     
    })
    this.pn.nativeElement.value="",
    this.pd.nativeElement.value=""
  }
  onAddCat(){
    let catl : Iproduct = {
      PName: this.pn.nativeElement.value,
      pDescription: this.pd.nativeElement.value,
      pCategory: 'catlog'
    }
    this.gettingProdCatl.emit(catl)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your catlog has been added',
      
    })
    this.pn.nativeElement.value = "",
    this.pd.nativeElement.value = ""
  }

}


