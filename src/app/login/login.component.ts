import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _logInserice:LoginService, private _router:Router){}
  public LogInForm:FormGroup=new FormGroup(
    {
      username:new FormControl(),
      password:new FormControl(),
    }
  )
  
  submit(){
    this._logInserice.authenticate(this.LogInForm.value).subscribe(
    (data:any)=>{
      sessionStorage.setItem("new-token",data.token)
      this._router.navigateByUrl("/dashboard");
      
    },
    (err:any)=>{
      alert("incorrect password")
    }
  )
  }
  



}
