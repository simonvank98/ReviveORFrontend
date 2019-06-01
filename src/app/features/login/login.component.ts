import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

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

    constructor(public authenticationService: AuthenticationService, private router: Router, public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.redirect = params['redirectTo'];
        });
    }

    onSubmit() {
        this.authenticationService.login(this.email, this.password).subscribe(data => {
            console.log(this.redirect);
            if (this.redirect) {
                this.router.navigate(['/', this.redirect]);
            } else {
                this.router.navigate(['me', 'edit']);
            }
        }, error => {
            this.showWarning = true;
            this.warning = 'Username or Password is incorrect';
        });
    }
}
