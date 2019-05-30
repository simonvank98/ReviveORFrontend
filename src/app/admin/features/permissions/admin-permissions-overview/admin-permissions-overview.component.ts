import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { UserModel } from 'src/app/shared/services/user/user.model';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin-permissions-overview',
    templateUrl: './admin-permissions-overview.component.html',
    styleUrls: ['./admin-permissions-overview.component.scss']
})
export class AdminPermissionsOverviewComponent implements OnInit {
    
    private formControl = new FormControl();
    private filteredUsers: Observable<UserModel[]>;
    private users: UserModel[] = [];
    private loaded = false;
    
    constructor(private userService: UserService) { }
    
    ngOnInit() {
        this.filteredUsers = this.formControl.valueChanges.pipe(startWith(''),
            map(value => typeof value === 'string' ? value : value.email),
            map(email => email ? this._filter(email) : this.users.slice())
        );
        this.userService.getAll().subscribe(data => {
            this.users = data;
            this.loaded = true;
        });
    }
        

    displayFn(user?: UserModel): string | undefined {
        return user ? user.email : undefined;
    }
        
    
    private _filter(email: string): UserModel[] {
        const filterValue = email.toLowerCase();
    
        return this.users.filter(user => user.email.toLowerCase().indexOf(filterValue) === 0);
      }
        
}
    