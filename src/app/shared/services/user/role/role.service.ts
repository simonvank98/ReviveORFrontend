import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import { APIService } from '../../api/api.service';
import { Observable } from 'rxjs';
import { Role } from './role.model';


@Injectable({
    providedIn: 'root'
})
export class RoleService {
    
    constructor(private api: APIService) {}
    
    public getAll(): Observable<Role[]> {
        return this.api.get<Role[]>('roles');
    }

    public updateroles(userId: number, roles: Role[]) {
        let roleIds = roles.map(function (role) {
            return role.id;
        });
        return this.api.put<Object>('/users/' + userId + '/roles', { "roles": roleIds });
    }

    public getFromUser(userId: number) {
        return this.api.get('/users/' + userId + '/roles');
    }
}
