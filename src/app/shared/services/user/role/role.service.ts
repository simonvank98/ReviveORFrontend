import {Injectable} from '@angular/core';
import {APIService} from '../../api/api.service';
import {Observable} from 'rxjs';
import {Role} from './role.model';


@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private api: APIService) {}

    public getAll(): Observable<Role[]> {
        return this.api.get<Role[]>('roles');
    }

    public updateroles(userId: number, role: Role) {
        const roles = [];
        roles.push(role.id);
        return this.api.put<Object>('/users/' + userId + '/roles', { 'roles': roles });
    }

    public getFromUser(userId: number) {
        return this.api.get('/users/' + userId + '/roles');
    }
}
