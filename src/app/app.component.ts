import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apicall angular';
  Users: any;

url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http:HttpClient,  private userData:UserdataService) {
    
     this.userData.users().subscribe((data)=>{
       console.log("data from API:",data);
       this.Users=data;
  });
  }

}
