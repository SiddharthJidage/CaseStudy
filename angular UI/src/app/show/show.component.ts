import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { coupon } from '../coupon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  coupon: coupon[]= [];
  formValue!:FormGroup;
  userObj : coupon = new coupon("","","","","");
  result: any;
  pcode: any;
  edate:any

  searchText: any;

  //Login
  // @ts-ignore


  constructor(private adminService:AdminService, private fb:FormBuilder, private router: Router) { }


  ngOnInit(): void {

    //login

    this.getCoupons()


    this.formValue=this.fb.group({
      id: [""],
      provider: [""],
      code: [""],
      category: [""],
      description: [""],
      expiryDate: [""],
    })




  }
  updatepcode(data: any,date:any){
    this.pcode=data;
    this.edate=date


  }

  getCoupons(){
    console.log('Test Call');
    this.adminService.getAllCoupons().subscribe(res=>{this.coupon=res});
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    return true;
  }

}
