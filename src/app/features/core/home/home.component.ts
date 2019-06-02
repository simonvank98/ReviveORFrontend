import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    showLogout = false;

    constructor(public authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.showLogout = this.authenticationService.shouldShowLogoutMessage();
    }

}
