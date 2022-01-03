import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { coupon } from '../coupon';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.css']
})
export class CouponUpdateComponent implements OnInit {
  coupons: coupon[]= [];
  formValue!:FormGroup;
  userObj : coupon = new coupon("","","","","");
  result: any;
  constructor( private adminService:AdminService,private fb:FormBuilder) { }
  ngOnInit() {
    this.formValue=this.fb.group({

      id: [""],
      provider: [""],
      code: [""],
      category: [""],
      description: [""],
      expiryDate: [""],
      })
  }
  addCoupon(){
    console.log("in add coupon method");
    this.userObj.id=this.formValue.value.id;
    this.userObj.provider=this.formValue.value.provider;
    this.userObj.code=this.formValue.value.code;
    this.userObj.description=this.formValue.value.description;
    this.userObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.AddCoupon(this.userObj).subscribe(res=>{this.coupons.push(res)});
    console.log("Coupon Added successfully");
    this.ngOnInit();
  }



  updateCoupon(){
    console.log("in add  method");
    this.userObj.id=this.formValue.value.id;
    this.userObj.provider=this.formValue.value.provider;
    this.userObj.code=this.formValue.value.code;
    this.userObj.description=this.formValue.value.description;
    this.userObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.updateCoupon(this.userObj,this.userObj.id).subscribe(res=>{
      console.log("updated coupon successfully")
    });
}
}
