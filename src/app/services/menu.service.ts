import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  public obsSection = new Subject();

  //HANDLE MENU BAR

  public obsMenuState = new Subject();
  private menuMax:boolean =  false;

  constructor() {}

  set menu(state:boolean){
    this.menuMax = state;
    this.obsMenuState.next(this.menuMax);
  }

  get menu(){
    return this.menuMax;
  }
}
