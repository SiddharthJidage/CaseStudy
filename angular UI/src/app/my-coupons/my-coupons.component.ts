import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {

  public  role:any='';
  coupons: any;


  constructor(private http:HttpClient,private service:AdminService)
   {

   }


  ngOnInit(): void {

    // console.log(this.d.getrole());
    this.role=localStorage.getItem('role');
    // alert(this.role);
    let response= this.http.get("http://localhost:9001/coupons/list");
    response.subscribe((data)=>this.coupons=data);


  }

  public deletCoupon(id:string){
    let res=this.service.deletUser(id);
    res.subscribe((data)=>this.coupons=data);
   }

}
