
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hello = "hello";
  name1:string = ''
  address1: string = 'nangal'
  name: string = '';
  address: string = '';
  imageURL?: string;

  
  constructor(private profile: ProfileService) { }

  ngOnInit(): void {
    // console.log(this.name)
    this.profile.fetchData().subscribe(response => {
      console.log(response)
      const data = JSON.stringify(response);
      console.log(data)
      const data1 = JSON.parse(data);
      console.log(data1.name)
      this.name = data1.name;
      this.address = data1.address;
      this.imageURL = data1.imageURL;
      console.log(this.name)
      console.log(this.address)
      this.name1 = this.name;
      this.address1 = this.address;
      
    }) 
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
      console.log(this.name)
      console.log(this.address)
      this.name1 = this.name;
      this.address1 = this.address;
    })  
    
  }

  onSubmit(form: NgForm){
    this.profile.getProfile(form.value.name, form.value.address, form.value.imageURL);
    console.log(form.value)
   

  }


}
