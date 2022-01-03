import { LoginserviceService } from './../loginservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential={
    username:'',
    password:''
  }
  constructor(private service:LoginserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.credential);

    if((this.credential.username!='' && this.credential.password!='') && (this.credential.username!=null && this.credential.password!=null))
    {
             this.service.generateToken(this.credential).subscribe((response:any)=>{
              console.log(response.token);
              localStorage.setItem("username",this.credential.username);
              localStorage.setItem('role','User');
              this.service.loginUser(response.token);
              window.location.href="/show"
             },
             error=>{ alert("Invalid Crdential");
             })

    }
    else{
      alert("Login UnSuccessful")
    }

   }
   //     console.log("fields are empty");
    //  }

  }


