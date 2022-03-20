import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
  panelOpenState = false;
  i = 0;
  historyOrder:any;
  constructor() { 
    const order = localStorage.getItem("order");
    console.log("order",JSON.parse(order+""));
    this.historyOrder = JSON.parse(order + "");
    this.historyOrder = Object.values(this.historyOrder)
    console.log("this.historyOrder ",this.historyOrder);
  }

  ngOnInit(): void {
  }

}
