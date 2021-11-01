
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(private profile: ProfileService) { }

  ngOnInit(): void {
    // console.log(this.name)
  }

  onSubmit(form: NgForm){
    this.profile.getProfile(form.value.name, form.value.address, form.value.imageURL);
    console.log(form.value)
   

  }

}
