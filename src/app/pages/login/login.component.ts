import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = [
    {
      username: 'test', 
      password: 'test', 
      type: 'พนักงาน', 
      name: 'Hello World',
    },
    {
      username: 'test1', 
      password: 'test1', 
      type: 'เจ้าของร้าน',   
    },
    {
      username: 'test2', 
      password: 'test2', 
      type: 'ร้านอาหาร',   
    }
  ]

  person = { 
   username: '', 
   password: '', 
   type: '',   
  }

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.person.username);
    console.log(this.person.password);
  }

  loginCheck(){
    console.log(this.person);
    for(let i = 0 ; i < this.data.length ; i++){
      if(this.person.username == this.data[i].username && this.person.password == this.data[i].password && this.person.type == this.data[i].type){
        this.dialogRef.close(this.data[i]);
        return;
      }
    }
    this.dialog.open(AlertDialogComponent, {
      width: '350px',
      data: { message: "Username หรือ Password ผิด", type: "ERROR" },
    });
    return;
  }

}
