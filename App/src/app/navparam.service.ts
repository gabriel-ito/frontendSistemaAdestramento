import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  navData:any;
  constructor() {

   }

  setNavData(navObj){
    this.navData = navObj
  }

  getNavData(){
    if (!this.navData)
      return 0;
    return this.navData;
  }
}