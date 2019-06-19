import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ReviveOR - The Ocean Republic';

    ngOnInit(): void {
/*        if (this.authenticationService.loggedIn) {
            this.authenticationService.loadUserData();
        }*/
    }
}
