import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
isDisplay1=false;
isDisplay2=false;
isDisplay3=false;
  constructor() { }

  ngOnInit(): void {
  }
toggleDisplay1(){
  this.isDisplay1=true;
  this.isDisplay2=false;
this.isDisplay3=false;

}
toggleDisplay2(){
  this.isDisplay1=false;
  this.isDisplay2=true;
this.isDisplay3=false;

}
toggleDisplay3(){
  this.isDisplay1=false;
  this.isDisplay2=false;
this.isDisplay3=true;

}
}
