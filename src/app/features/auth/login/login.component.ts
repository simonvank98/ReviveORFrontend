import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    showWarning = false;
    warning = '';
    private redirect;

    constructor(public authenticationService: AuthenticationService, private router: Router, public route: ActivatedRoute, public snackbarService: SnackbarService) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.redirect = params['redirectTo'];
        });
        if (this.authenticationService.loggedIn) {
            this.router.navigate(['account']);
        }
    }

    onSubmit() {
        this.authenticationService.login(this.email, this.password).subscribe(data => {
            if (this.redirect) {
                this.router.navigate([this.redirect]);
            } else {
                this.router.navigate(['account']);
            }
            this.snackbarService.show('You have successfully logged in');
        }, error => {
            this.showWarning = true;
            this.warning = 'Username or password is incorrect';
            this.snackbarService.show('Username or password is incorrect');
        });
    }
}
