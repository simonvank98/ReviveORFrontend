import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import { UserModel } from 'src/app/shared/services/user/user.model';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Role } from 'src/app/shared/services/user/role/role.model';
import { RoleService } from 'src/app/shared/services/user/role/role.service';

@Component({
    selector: 'app-admin-permissions-overview',
    templateUrl: './admin-permissions-overview.component.html',
    styleUrls: ['./admin-permissions-overview.component.scss'],
})
export class AdminPermissionsOverviewComponent implements OnInit {
    
    private users: UserModel[] = [];
    private roles: Role[] = []

    private userFormControl = new FormControl();
    private roleFormControl = new FormControl();
    private filteredUsers: Observable<UserModel[]>;
    private usersLoaded = false;
    private rolesLoaded = false;
    private selectedUser: UserModel;
    private selectedRoles: Role[];
    
    constructor(private userService: UserService, private roleService: RoleService) { }
    
    ngOnInit() {
        this.filteredUsers = this.userFormControl.valueChanges.pipe(startWith(''),
            map(value => typeof value === 'string' ? value : value.email),
            map(email => email ? this._filter(email) : this.users.slice())
        );
        this.userService.getAll().subscribe(data => {
            this.users = data;
            this.usersLoaded = true;
        });
        this.roleService.getAll().subscribe(data => {
            this.roles = data;
            this.rolesLoaded = true;
        });
    }

    private displayFn(user?: UserModel): string | undefined {
        return user ? user.email : undefined;
    }
    
    private _filter(email: string): UserModel[] {
        const filterValue = email.toLowerCase();
    
        return this.users.filter(user => user.email.toLowerCase().indexOf(filterValue) === 0);
    }

    private onSaveClicked() {
        console.log(this.selectedUser);
    }

    private onRolesChanged(event) {
        this.selectedRoles = event.value;
    }

    private onUserChanged(event) {
        this.selectedUser = event.option.value;
    }

        
}
    