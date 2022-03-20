import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.css']
})
export class MainCartComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = [ 'name', 'price', 'amount','totalPrice','todo'];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation != null){
      let state = navigation.extras.state as {data:any};
      this.dataSource = state.data;
    }
 
    this.dataSource.forEach((item:any) => {
      item.totalPrice = item.amount * item.price;
    });
   }

  ngOnInit(): void {
    console.log(this.dataSource);
  }
  reloadData(){

  }

  delete(item:any){
    console.log(item.name);
  }

  appoveOrder(){
    const coppyParameters = Object.assign({}, this.dataSource);
    localStorage.setItem("order" ,JSON.stringify(coppyParameters));

    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '350px',
      data: { message: "รับออเดอร์สำเร็จ", type: "INFO" },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/home/food'],{
  
      });
    })
  }

}
