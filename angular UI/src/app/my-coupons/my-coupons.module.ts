import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCouponsComponent } from './my-coupons.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { SignupService } from '../signup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyCouponsComponent]
})
export class MyCouponsModule implements OnInit {

  public  role:any='';
  coupons: any;


  constructor(private http:HttpClient)
   {

   }


  ngOnInit(): void {

    // console.log(this.d.getrole());
    this.role=localStorage.getItem('role');
    // alert(this.role);
    let response= this.http.get("http://localhost:9999/coupons/list");
    response.subscribe((data)=>this.coupons=data);


  }
 }
