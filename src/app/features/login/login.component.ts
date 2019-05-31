import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(public authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authenticationService.login(this.email, this.password).subscribe();
    }
}
