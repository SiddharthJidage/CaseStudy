import { compareSegments } from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';
import { Component, OnInit } from '@angular/core';
import { Role } from '../Role';
import { AdminService } from '../admin.service';
import { admin } from '../admin';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
 role:any = new Role([{role:"Admin"}]);
 admin :any = new admin("","","","","","",[{role:"Admin"}]);

 data:any;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  signupAdmin()
  {
      this.service.createAdmin(this.admin).subscribe((data)=>{
        window.location.href="admin/admin-login";
        alert("You Have Successfully sign up ")
      },

      (error)=>{console.log(error)});
        console.log(this.role);
        console.log(this.admin)
  }

}
