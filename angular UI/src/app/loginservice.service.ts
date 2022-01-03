import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url="http://localhost:9003/user/authenticate"

  header = new HttpHeaders().set("Authorization","Bearer "+this.getToken());

  constructor(private http:HttpClient) { }

   generateToken(credential:any){
    return this.http.post(`${this.url}`,credential);
    // return this.http.post(`http://localhost:9003/user/authenticate`,credential);
 }





  loginUser(token: string)
  {
    localStorage.setItem("token",token)
    return true;
  }

 isLoggedIn(){
   let token= localStorage.getItem("token");
   if(  token==='' || token==null)
   {
     return false;
   }
   else{
     return true;
   }

   }
   logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    return true;
  }
  getToken(){
    return localStorage.getItem('token')
  }

}

