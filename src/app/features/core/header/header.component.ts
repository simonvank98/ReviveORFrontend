import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ShoppingCartService} from '../../shop/cart/cart.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../authentication.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    cartItemsCount = 0;
    navOpen = false;
    user = '';

    private cartSubscription: Subscription;


    constructor(private cartService: ShoppingCartService, private router: Router, public authenticationService: AuthenticationService) {
        authenticationService.userInfoChanged.subscribe(() => {
            if (authenticationService.userinfo) {
                this.user = authenticationService.userinfo['name'];
            }
        });
    }


    ngOnInit() {
        this.cartSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            this.cartItemsCount = products.length;
        });
        this.cartService.loadCartItemsFromStorage();
        if (this.authenticationService.loggedIn) {
            this.authenticationService.getUserData();
        }
    }

    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }

    toggleNav() {
        this.navOpen = !this.navOpen;
    }

}
