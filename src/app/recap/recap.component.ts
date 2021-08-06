import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

}