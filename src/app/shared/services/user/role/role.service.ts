import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import { TempApiService } from '../../api/temp-api.service';
import { Observable } from 'rxjs';
import { Role } from './role.model';


@Injectable({
    providedIn: 'root'
})
export class RoleService {
    
    constructor(private api: TempApiService) {}
    
    public getAll(): Observable<Role[]> {
        return this.api.get<Role[]>('roles');
    }
}
