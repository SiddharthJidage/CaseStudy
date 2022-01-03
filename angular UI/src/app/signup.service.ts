import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  header = new HttpHeaders().set("Authorization","Bearer "+this.getToken());
  constructor(private http:HttpClient) { }
  public doAddUser(signup: any){
    return this.http.post("http://localhost:9003/user/addUser",signup,{responseType:'text' as 'json'});

  }
  public getUser(){
    return this.http.get("http://localhost:9003/user/lists");
  }
  public deletUser(username:any){
    return this.http.delete("http://localhost:9003/user/delete/"+username);
  }

  public updateUser(username:any){
    return this.http.delete("http://localhost:9003/user/update/"+username);
  }

  url="http://localhost:9003/user/authenticate"



  getAuth(credential:any)
  {
    return this.http.post(`${this.url}/authenticate`,credential);
  }

 //for login user
 loginuser(token:any)
 {
     localStorage.setItem("token",token);
     // localStorage.setItem("role","Admin");
     return true;
 }

 // check user is login or not
 isLoggedIn()
 {
   let token = localStorage.getItem("token");
   if(token==undefined || token==null || token=='')
   {
     return false;
   }else{
     return true;
   }
 }
// logout user
logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  return true;
}

// for get token
getToken()
{
 return localStorage.getItem("token");
}
}
