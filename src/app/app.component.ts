import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'authentication1';
  private usersub: Subscription | undefined;
  isAuthenticated = false;
  name?: string;
  address?: string;
  imageURL?: string

  constructor(private auth: AuthService, private profile: ProfileService){}

  ngOnInit(){


    this.usersub = this.auth.user.subscribe(user =>{
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
      console.log(!!user);
})

this.profile.fetchData().subscribe(response => {
  console.log(response)
  const data = JSON.stringify(response);
  console.log(data)
  const data1 = JSON.parse(data);
  console.log(data1.name)
  this.name = data1.name;
  this.address = data1.address;
  this.imageURL = data1.imageURL;
})  



  }
  ngOnDestroy(){
    this.usersub?.unsubscribe();
  }

  updateData(){

    this.profile.fetchData().subscribe(response => {
      console.log(response)
      const data = JSON.stringify(response);
      console.log(data)
      const data1 = JSON.parse(data);
      console.log(data1.name)
      this.name = data1.name;
      this.address = data1.address;
      this.imageURL = data1.imageURL;
    })  
    
  }

  logout(){
    this.isAuthenticated = false;
  }



  
}
