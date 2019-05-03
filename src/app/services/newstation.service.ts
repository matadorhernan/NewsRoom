import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewstationService {

  constructor(private http:HttpClient) {

  }

  getQuery(section:string){
    let url= `https://newsapi.org/v2/${section}?country=us&apiKey=55f92b89c82b4571b0dac752e27a5ad4`;
    return this.http.get(url);
  }

  getTopHeadliners(){
    let section = 'top-headlines';
    return this.getQuery(section);

  }
}
