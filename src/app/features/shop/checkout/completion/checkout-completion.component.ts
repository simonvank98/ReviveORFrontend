import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../cart/cart.service';

@Component({
  selector: 'app-checkout-completion',
  templateUrl: './checkout-completion.component.html',
  styleUrls: ['./checkout-completion.component.scss']
})
export class CheckoutCompletionComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

    ngOnInit() {
      this.cartService.clearCart();
    }

}
