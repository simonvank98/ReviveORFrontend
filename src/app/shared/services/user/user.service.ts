import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
import { TempApiService } from '../api/temp-api.service';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    constructor(private api: TempApiService) {}
    
    public getAll(): Observable<UserModel[]> {
        return this.api.get<UserModel[]>('users');
    }
}
