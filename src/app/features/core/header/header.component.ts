import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ShoppingCartService} from '../../shop/cart/cart.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';

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
            if (authenticationService.userInfo) {
                this.user = authenticationService.userInfo['name'];
            }
        });
    }


    ngOnInit() {
        this.cartSubscription = this.cartService.cartItemsSubject.subscribe((products) => {
            this.cartItemsCount = products.length;
        });
        this.cartService.loadCartItemsFromStorage();
        if (this.authenticationService.loggedIn) {
            this.authenticationService.loadUserData();
        }
    }

    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }

    toggleNav() {
        this.navOpen = !this.navOpen;
    }

}
