import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
      this.authenticationService.logout();
      this.router.navigate(['']);
  }

}
