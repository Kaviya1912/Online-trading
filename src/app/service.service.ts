import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private client: HttpClient) { }

  private login:any;

  public islogin(){

    if(this.login==null){
      return false;
    }
    return true;
  }

  public load(data:any){
    this.login = data;
  }

  public getname(){
    if(this.login==null){
      return false;
    }
    return this.login;
  }

  public isadmin(){
    if(this.login!=null){
      if(this.login.role=="admin"){
        return true;
      }
      return false;
    }
    return false;
  }
  getIndStocks(){
    this.client.get<any>('  http://localhost:3000/IND_Stocks')
    console.log(this.getIndStocks)
  }
  getUSStocks(){
    this.client.get<any>('  http://localhost:3000/US_Stocks')
    console.log(this.getIndStocks)
  }
}
