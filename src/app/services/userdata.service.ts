import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import {ClientRequest} from 'http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }
  
  userdetails()
  {
    return [
      {name:'priyanshi',email:'priya1232gmail.com',mobile:'99876765',age:25},
      {name:'sunil',email:'sunil232gmail.com',mobile:'990006765',age:26},
      {name:'neha',email:'neha1232gmail.com',mobile:'998789895',age:27}
    ]
  }
}
