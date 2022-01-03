import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { CouponDashComponent } from './coupon-dash/coupon-dash.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponUpdateComponent } from './coupon-update/coupon-update.component';
import { ShowComponent } from './show/show.component';
;


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"userlogin",component:LoginComponent},
  {path:"usersignup",component:SignupComponent},
  {path:"adminsignup",component:AdminSignupComponent},
  {path:"updatecoupon",component:CouponUpdateComponent},
  {path:"addcoupon",component:CouponAddComponent},
  {path:"mycoupons",component:MyCouponsComponent},
  {path:"couponsdash",component:CouponDashComponent},
  {path:"show",component:ShowComponent},

  {path:"profile",component:UserProfileComponent},
  {path:"user",component:UserComponent,canActivate:[AuthGuard]}
  // {path:"admin",component:AdminComponent,pathMatch:"full",canActivate:[AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
