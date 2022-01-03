import { signup } from './../signup';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Role } from '../Role';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  role:any = new Role([{role:"User"}]);
  user :any = new signup("","","",[{role:"User"}],"","");

  constructor(private service:SignupService) { }

  ngOnInit(): void {
  }

  signupUser()
  {
    this.service.doAddUser(this.user).subscribe((data)=>{
      console.log(data)
      window.location.href="/userlogin";
      alert("User Added Successfully ")
    },

    (error)=>{console.log(error)});
      console.log(this.role);
      console.log(this.user)
  }

}
