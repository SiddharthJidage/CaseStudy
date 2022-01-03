import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { admin } from './admin';
import { coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

   // for admin
  public createAdmin(admin:admin)
  {
      return this.http.post("http://localhost:9005admin/add",admin,{responseType:'text' as 'json'});
  }

  public deleteAdmin(username:any)
  {
      return this.http.post("http://localhost:9005/admin/delete/"+username,{responseType:'text' as 'json'});
  }



  // update Admin

  // for coupons

  getAllCoupons(){
    return this.http.get<coupon[]>('http://localhost:9005/admin/listCoupon');
  }

  public AddCoupon(c:coupon){
    return this.http.post<coupon>("http://localhost:9005/admin/addCoupon",c);
  }

  public updateCoupon(coupons:coupon,id:String){
    return this.http.post<coupon>("http://localhost:9001/coupons/update/"+id,coupons);
  }

  public DeleteCoupon(id:any){
    return this.http.delete("http://localhost:9001/coupons/delete/"+id);
  }

  // for user

  public getUser(){
    return this.http.get("http://localhost:9003/user/list");
  }

  public deletUser(username:string){
    return this.http.delete("http://localhost:9003/user/delete/"+username);
  }

  public getUserByName(username:string){
    return this.http.get("http://localhost:9003/user/getUser/"+username);
  }



  }

