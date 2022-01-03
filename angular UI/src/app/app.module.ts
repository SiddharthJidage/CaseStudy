import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminService } from './admin.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }  from '@angular/material/toolbar'
import { MatFormFieldModule }  from '@angular/material/form-field'
import { MatInputModule }  from '@angular/material/input'
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

import { AdminSignupComponent } from './admin-signup/admin-signup.component';

import { CouponAddComponent } from './coupon-add/coupon-add.component';
import { CouponDashComponent } from './coupon-dash/coupon-dash.component';
import { CouponUpdateComponent } from './coupon-update/coupon-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShowComponent } from './show/show.component';
import { MyCouponsComponent } from './my-coupons/my-coupons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    AdminSignupComponent,
    CouponAddComponent,
      CouponDashComponent,
      CouponUpdateComponent,
      UserProfileComponent,
      ShowComponent,
      MyCouponsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule


  ],
  providers: [AdminService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
