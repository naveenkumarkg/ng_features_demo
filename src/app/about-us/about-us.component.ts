import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../apiService/about.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  users: any = [];
  students = [
    {name:'Naveen',Country:'India'},
    {name:'Katyayani',Country:'India'},
    {name:'Sirisha',Country:'India'}
  ]
  // myName ='Sirisha';

  constructor(private aboutService: AboutUsService) { } // inject the httpclient 

  ngOnInit(): void {

    this.aboutService.getUseApi().subscribe((data) => {
      if (data != undefined && data != null) {
        console.log(data)
        return this.users = data;
      }
    })

  }

  userProfile(user){
    console.log(user)
  }

}
