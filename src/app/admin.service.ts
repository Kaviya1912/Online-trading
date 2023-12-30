import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
    email: string | undefined;
  password: string | undefined;


    constructor() { }
    private previousUrl: string = '';

    setPreviousUrl(url: string): void {
      this.previousUrl = url;
    }

    getPreviousUrl(): string {
      return this.previousUrl;
    }
}
