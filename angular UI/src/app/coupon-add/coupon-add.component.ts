import { CouponService } from './../coupon.service';
import { coupon } from './../coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.css']
})
export class CouponAddComponent implements OnInit {
    coupon :any = new coupon("","","","","");

    data:any;
     constructor(private service:CouponService) { }

     ngOnInit(): void {
     }

     addcoupon()
     {
         this.service.doAddCoupon(this.coupon).subscribe((data)=>{
           window.location.href="/couponsdash";
           alert("Coupon Added Successfully ")
         },

         (error)=>{console.log(error)});
          //  console.log(this.role);
           console.log(this.coupon)
     }

   }
