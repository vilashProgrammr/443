import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    }
    //THIS IS DJ+2 @ PROGRAMMR
    

  ngOnInit() {
  }

}
