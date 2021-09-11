import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

BASE_URL  = "https://localhost:44381/api/Users"

  constructor(private httpClient: HttpClient) { }

  public list : User[] = [];

  getAllUsers() {
     this.httpClient.get<User[]>(this.BASE_URL).subscribe((data) => {
       console.log(data);
        this.list = data;
     })
  }

  getUser (nome : string)
  {
    return this.httpClient.get<User>(this.BASE_URL+ `/${nome}`)
  }

  postUser (user : User){
    return this.httpClient.post(this.BASE_URL, user)
  }
}
