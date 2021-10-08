import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList:Array<any> = [];

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/users');
  }
}
