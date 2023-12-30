import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
getProducts() {
  throw new Error('Method not implemented.');
}

constructor(public http:HttpClient) { }

indstocks(){
  return this.http.get<any>("http://localhost:3000/indstocks")
  .pipe(map((res:any)=>{
    return res;
  }))
}
usstocks(){
  return this.http.get<any>("http://localhost:3000/usstocks")
  .pipe(map((res:any)=>{
    return res;
  }))

  }


  

}





