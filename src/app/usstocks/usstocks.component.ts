import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usstocks',
  templateUrl: './usstocks.component.html',
  styleUrls: ['./usstocks.component.css']
})
export class UsstocksComponent implements OnInit {

  stocks: any = {};
  Apple_Price:any
  Amazon_Price:any
  Microsoft_Price:any
  Nvidia_Price:any
  Disney_Price:any
  Walmart_Price:any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchStockData();
  }
  fetchStockData(){
    this.http.get<any>('http://localhost:3000/IndStocks').subscribe(indData => {
      this.stocks= indData;
      console.log(this.stocks)
      this.Apple_Price=this.stocks[0]?.price;
      console.log(this.Apple_Price)

      this.Amazon_Price=this.stocks[1]?.price;
      console.log(this.Amazon_Price)

      this.Microsoft_Price=this.stocks[2]?.price;
      console.log(this.Microsoft_Price)

      this.Nvidia_Price=this.stocks[3]?.price;
      console.log(this.Nvidia_Price)

      this. Disney_Price=this.stocks[4]?.price;
      console.log(this.Disney_Price)

      this.Walmart_Price=this.stocks[5]?.price;
      console.log(this.Walmart_Price)



    });

  }
}
