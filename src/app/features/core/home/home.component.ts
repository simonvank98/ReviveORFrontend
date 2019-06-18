import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    showLogout = false;

    constructor(public authenticationService: AuthenticationService, private snackBarService: SnackbarService) {
    }

    ngOnInit() {
        this.showLogout = this.authenticationService.shouldShowLogoutMessage();

        if (this.showLogout) {
            this.snackBarService.show('You have been logged out.');
        }
    }

}
