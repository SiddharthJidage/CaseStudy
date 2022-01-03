import { coupon } from './coupon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http:HttpClient) { }

  public doAddCoupon(coupon: coupon){
    return this.http.post("http://localhost:9001/coupons/add",coupon,{responseType:'text' as 'json'});

  }
}
