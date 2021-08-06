import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  confirm() {
    window.alert('Your order has been submitted');
    this.items = this.cartService.clearCart();
  }
}