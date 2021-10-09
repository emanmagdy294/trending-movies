import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  [x: string]: any;
  error:string ='';
  loginForm = new FormGroup({
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
})

constructor(private _AuthService:AuthService , private _Router:Router) { }

submitLoginForm(loginForm:FormGroup)
{
  this._AuthService.login(loginForm.value).subscribe((response:any)=>{
 if(response.message == 'success')
 {
   localStorage.setItem('userToken' , response.token);
   this._AuthService.saveCurrentUser();
   this._Router.navigate(['/home'])
 }
 else
{
 this.error=response.message
 }
  })
}


  ngOnInit(): void {
  }

}
