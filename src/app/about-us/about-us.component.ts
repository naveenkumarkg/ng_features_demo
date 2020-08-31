import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../apiService/about.service';
import {MatDialog} from '@angular/material/dialog';

import {EditComponent} from '../edit/edit.component';

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
  index:number;
  // myName ='Sirisha';

  constructor(private aboutService: AboutUsService, private dailog: MatDialog) { } // inject the httpclient 

  ngOnInit(): void {

    this.aboutService.getUseApi().subscribe((data) => {
      if (data != undefined && data != null) {
        console.log(data)
        return this.users = data;
      }
    })

  }

  userProfile(user,index){
    console.log(index)
    console.log(user)
    this.index = index;
   const closeAll = this.dailog.open(EditComponent,{
      data:{
       profile:user 
      },
      height: '400px',
      width: '600px',
    });

    closeAll.afterClosed().subscribe((result)=>{
      console.log('I am the closed reuslts',result)
      this.users[this.index].login = result;

    })

  }

}

// @Component({
//   template:'<h1>I am the BOSS</h1>',

// })
// export class naveenCOmponent{

 

// }
