import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/shared/services/user/user.service';
import {UserModel} from 'src/app/shared/services/user/user.model';
import {FormControl, NgForm} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Role} from 'src/app/shared/services/user/role/role.model';
import {RoleService} from 'src/app/shared/services/user/role/role.service';
import {SnackbarService} from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-admin-permissions-overview',
    templateUrl: './admin-permissions-overview.component.html',
    styleUrls: ['./admin-permissions-overview.component.scss'],
})
export class AdminPermissionsOverviewComponent implements OnInit {

    private users: UserModel[] = [];
    private roles: Role[] = [];

    private userFormControl = new FormControl();
    private roleFormControl = new FormControl();
    private filteredUsers: Observable<UserModel[]>;
    usersLoaded = false;
    private rolesLoaded = false;
    private selectedUser: UserModel;
    private selectedRole: Role;

    @ViewChild('f') form: NgForm;

    constructor(private userService: UserService, private roleService: RoleService, private snackbarService: SnackbarService) { }

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

    onSaveClicked() {
        if (this.form.valid) {
            this.roleService.updateroles(this.selectedUser.id, this.selectedRole).subscribe(data => {
                this.snackbarService.show('User roles updated.');
                this.selectedUser.roles[0] = this.selectedRole;
            });
        } else {
            this.snackbarService.show('Please fill out all required fields.');
        }
    }

    private onRolesChanged(event) {
        this.selectedRole = event.value;
    }

    private onUserChanged(event) {
        this.selectedUser = event.option.value;
        this.selectedRole = this.selectedUser.roles[0];
    }

    private onClearInputClicked() {
        this.selectedUser = {} as UserModel;
        this.selectedRole = null;
    }

    private compareSelection(role1: Role, role2: Role) {
        return role1 && role2 ? role1.id === role2.id : role1 === role2;
    }

}
