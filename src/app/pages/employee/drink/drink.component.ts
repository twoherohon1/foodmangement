import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  data = [
    {
      name: 'น้ำเปล่า', 
      img: 'http://f.ptcdn.info/572/037/000/ny3p8buuo1HAnMfmesx-o.jpg',  
      price: 10,
      detail: '',
      amount:1
    },
    {
      name: 'โค้ก', 
      img: 'https://static.bigc.co.th/media/catalog/product/8/8/8851959132012_7.jpg', 
      price: 20,   
      detail: '',
      amount:1
    },
    {
      name: 'ชาเขียว', 
      img: 'https://www.fnthaidairies.com/templateEditor/kcfinder/upload/images/%E0%B9%82%E0%B8%81%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%94%207x5.jpg', 
      price: 15, 
      detail: '',
      amount:1
    },
  ]

  amount = 1;
  puschaseList = [{
    name: null, 
    img: null,
    price: null, 
    detail: null,
    amount: 0,
  }];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  addToCart(item:any){
    if(this.puschaseList[0].name == null){
      this.puschaseList = [];
    }
    this.puschaseList = this.puschaseList.concat(item);
    console.log(this.puschaseList);
  }

  goToCart(){
    console.log("test",this.puschaseList);
    this.router.navigate(['/cart'],{
      state: {
        data : this.puschaseList,
      }
    });
  }
}
