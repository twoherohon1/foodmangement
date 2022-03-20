import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  

}
