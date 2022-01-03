import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-coupon-dash',
  templateUrl: './coupon-dash.component.html',
  styleUrls: ['./coupon-dash.component.css']
})
export class CouponDashComponent implements OnInit {

  coupons: any;


  constructor(private http:HttpClient,private service:AdminService)
   {

   }


  ngOnInit(): void {

    // alert(this.role);
    let response= this.http.get("http://localhost:9999/coupons/list");
    response.subscribe((data)=>this.coupons=data);


  }

  public deletCoupon(id:any){
    let res=this.service.DeleteCoupon(id);
    res.subscribe((data)=>this.coupons=data);
  }



}


