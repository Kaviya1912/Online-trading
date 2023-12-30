import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-indstocks',
  templateUrl: './indstocks.component.html',
  styleUrls: ['./indstocks.component.css']
})
export class IndstocksComponent implements OnInit {

  stocks: any = {};
  HDFC_Price:any
  Reliance_Price:any
  TCS_Price:any
  AxisBank_Price:any
  Titan_Price:any
  Infosys_Price:any

  constructor(private http: HttpClient,private logger:LoggerService) { }

  ngOnInit() {
      //logger
      this.logger.log("Ind stocks component");



    this.fetchStockData();
  }
  fetchStockData(){
    this.http.get<any>('http://localhost:3000/IndStocks').subscribe(indData => {
      this.stocks= indData;
      console.log(this.stocks)
      this.HDFC_Price=this.stocks[0]?.price;
      console.log(this.HDFC_Price)

      this.Reliance_Price=this.stocks[1]?.price;
      console.log(this.Reliance_Price)

      this.TCS_Price=this.stocks[2]?.price;
      console.log(this.TCS_Price)

      this.AxisBank_Price=this.stocks[3]?.price;
      console.log(this.AxisBank_Price)

      this. Titan_Price=this.stocks[4]?.price;
      console.log(this. Titan_Price)

      this.Infosys_Price=this.stocks[5]?.price;
      console.log(this.Infosys_Price)



    });

  }

}
