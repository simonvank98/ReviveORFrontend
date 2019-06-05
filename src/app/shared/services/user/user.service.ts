import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import { APIService } from '../api/api.service';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    constructor(private api: APIService) {}
    
    public getAll(): Observable<UserModel[]> {
        return this.api.get<UserModel[]>('users');
    }


    public updateRoles() {
        // this.api.put
    }
}
