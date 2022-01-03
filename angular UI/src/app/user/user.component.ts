import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { LoginComponent } from '../login/login.component';
import { SignupService } from '../signup.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public  role:any='';
  users:any;
  result: any;


  constructor(private http : HttpClient,private adminService:AdminService)
   {

   }


  ngOnInit(): void {

    let response= this.http.get("http://localhost:9003/user/list");
    response.subscribe((data)=>this.users=data);
  }


 deleteUser(username:string){
      let res=this.adminService.deletUser(username);
      res.subscribe((data)=>this.users=data);
     }


  }

