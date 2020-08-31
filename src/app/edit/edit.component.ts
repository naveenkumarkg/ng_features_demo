import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
prfileData:any;
userLoginName: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog) {
  
   }

  ngOnInit(): void {
    console.log('I am from the dialog Comp',this.data)
    this.prfileData = this.data.profile;
    this.userLoginName = this.prfileData.login;
  }

  addData(userLoginName){
    this.dialog.afterAllClosed.subscribe((sendData)=>{
      
    })

  }

}
