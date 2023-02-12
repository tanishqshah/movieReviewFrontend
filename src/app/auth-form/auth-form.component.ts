import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Output() navRefresh = new EventEmitter<boolean>();
  name:string="";
  email:string="";
  contact:string="";
  password:string="";
  loginemail:string="";
  loginpassword:string="";
activeClass : boolean 
constructor(public http:HttpClient,public fb: FormBuilder,private router: Router){
this.activeClass = false
}

ngOnInit(){
  if(localStorage.getItem("eweekly_user")!=null){
    this.router.navigate(['main/blog']);
  }
  if(localStorage.getItem("eweekly_user")==null){
    // this.isLoggedIn = false;
  }
}

signupForm = this.fb.group({
  name: ['',[Validators.required,Validators.minLength(2)]],
  email: ['',[Validators.required,Validators.email]],
  contact: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  password: ['',[Validators.required,Validators.minLength(8)]]
})
loginForm = this.fb.group({
  loginemail: ['',[Validators.required,Validators.email]],
  loginpassword: ['',[Validators.required,Validators.minLength(8)]]
})
signup(){
  let body = {
    "name":this.name,
    "email":this.email,
    "phone":this.contact,
    "password":this.password,
    "preferences":"",
    "status":""
  }
  this.http.post("http://localhost:3000/users/newUser",body).subscribe(res=>{
    console.log(res);
    this.name="";
    this.email="";
    this.contact="";
    this.password="";
    alert("form submitted")
    this.activeClass = false;
  })
}
login(){
  let body = {
    "email":this.loginemail,
    "password":this.loginpassword
  }
  this.http.post("http://localhost:3000/users/login",body).subscribe(res=>{
    console.log(res);
    this.loginemail="";
    this.loginpassword="";
    this.setLocalStorage(res);
    // this.navRefresh.emit(true)
    window.location.reload();
    alert("form submitted");
    // this.router.navigate(['main/blog']);
  })
}
setLocalStorage(res:any){
  localStorage.setItem("eweekly_user",res.data.email);
  console.log(res.data.email);
}
toggleForm(){
this.activeClass= !this.activeClass
}
}
