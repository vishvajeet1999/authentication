import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  getProfile(name: string, address: string, imageURL:string){
     this.http.put('https://ng-complete-guide-19521-default-rtdb.firebaseio.com/profile.json',{name: name,
    address: address, imageURL: imageURL}).subscribe(response =>{
      console.log(response)
      const data = JSON.stringify(response);
      console.log(data)
      const data1 = JSON.parse(data);
      console.log(data1.name)

    });
  }

  fetchData(){
    return this.http.get('https://ng-complete-guide-19521-default-rtdb.firebaseio.com/profile.json')
  }

}
