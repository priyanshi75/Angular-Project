import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  componentName = 'Cart';
  btnDisabled = true;
  item='';
  cart:any = [];
 


  constructor() { }

  ngOnInit(): void {
  }
  
  getItem(e:any){
    this.item = e.target.value;
    // this.componentName = e.target.value;
    // console.log(e.target.value);
  }
  addToCart(){
    this.cart.push(this.item);
    this.item=''
  }

}
