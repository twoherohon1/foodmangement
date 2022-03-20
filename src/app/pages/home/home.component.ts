import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map((result:any) => result.matches),
  //     shareReplay()
  //   );

  // @ViewChild('drawer', { static: true }) drawer?:MatSidenav;

  dataLogin:any;
  showFiller = false;
  type:any;

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

  login() : void{
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result`);
      console.log(result);
      this.dataLogin = result;
      this.type = this.dataLogin.type;
    })
  }

  clearData(){
    this.dataLogin = null;
  }
}
