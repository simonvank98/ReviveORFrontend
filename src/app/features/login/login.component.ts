import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

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

    constructor(public authenticationService: AuthenticationService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authenticationService.login(this.email, this.password).subscribe(data => {
            this.router.navigate(['me', 'edit']);
        }, error => {
            this.showWarning = true;
            this.warning = 'Username or Password is incorrect';
        });
    }
}
