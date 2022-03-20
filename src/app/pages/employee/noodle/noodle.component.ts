import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noodle',
  templateUrl: './noodle.component.html',
  styleUrls: ['./noodle.component.css']
})
export class NoodleComponent implements OnInit {

  data = [
    {
      name: 'ก๋วยเตี้ยวเรือ', 
      img: 'https://i0.wp.com/goodlifeupdate.com/app/uploads/2021/04/image-130-edited.png',  
      price: 45,
      detail: '',
      amount:1
    },
    {
      name: 'ก๋วยเตี๋ยวต้มยำ', 
      img: 'https://www.kinraideewa.com/wp-content/uploads/2021/05/tom-yum.jpg', 
      price: 45,   
      detail: '',
      amount:1
    },
    {
      name: 'ก๋วยเตี๋ยวเนื้อ', 
      img: 'data:image/jpeg;base64,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', 
      price: 45, 
      detail: '',
      amount:1
    },
    {
      name: 'ก๋วยเตี้ยวลูกชิ้นปลา', 
      img: 'https://s359.kapook.com/pagebuilder/fbe00e8b-5150-4f84-9763-a2cc54f0fda6.jpg', 
      price: 45, 
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
