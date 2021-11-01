import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



import { AuthService } from '../auth.service';

interface  AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}


@Component({
  selector: 'app-authntication',
  templateUrl: './authntication.component.html',
  styleUrls: ['./authntication.component.css']
})
export class AuthnticationComponent implements OnInit, OnDestroy {

  isLoginMode = true;
  error: string = '';
  forgetPassowedMessage: string = '';
  
  
  
  
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.auth.user.unsubscribe();
    
  }
  ngOnDestroy(){
    
  }

  onSwitch(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm){
    const email= form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
      this.auth.login(email, password).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/profile']);

      })
    }else{
      this.auth.signUp(email, password).subscribe(resData => {
        console.log(resData);
        console.log(resData)
        this.router.navigate(['/profile']);
      }, error=>{
        console.log(error)
      })
    }
  }

  reset(email:string){
    this.auth.resetPassword(email).subscribe(result =>{
      console.log(result);
      this.forgetPassowedMessage = "An email has been sent on your email to reset the password";

    })
      
  }

  

}
