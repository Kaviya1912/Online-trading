import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  stockType: string = 'select';
  selectedCategory: string = '';
  stockQuantity: number = 1;
  selectedAmount: string = '';
  stocks: any = {};
 

  constructor(private http: HttpClient,private logger:LoggerService) { }

  ngOnInit() {

    this.logger.log("stocks component");


    this.fetchStockData();
  }

  fetchStockData() {
    this.http.get<any>('http://localhost:3000/IndStocks').subscribe(indData => {
      this.stocks.indStocks = indData;
    });

    this.http.get<any>('http://localhost:3000/UsStocks').subscribe(usData => {
      this.stocks.usStocks = usData;
    });
  }

  updateStockType() {
    this.selectedCategory = '';
    this.selectedAmount = '';
    this.stockQuantity = 1;
  }

  updateStockQuantity() {
    if (this.selectedCategory !== '') {
      const selectedStock = this.stocks[this.stockType + 'Stocks']?.find((stock: any) => stock.category === this.selectedCategory);
      if (selectedStock) {
        const price = parseInt(selectedStock.price);
        const amount = price * this.stockQuantity;
        this.selectedAmount = amount.toString();
      }
    }
  }

  getStocksByType(type: string) {
    return this.stocks[type + 'Stocks'] || [];
  }

  getStockPrice(category: string): string {
    const selectedStock = this.stocks[this.stockType + 'Stocks']?.find((stock: any) => stock.category === category);
    return selectedStock ? selectedStock.price : '0';
  }
}
