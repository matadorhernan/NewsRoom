import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewstationService {

  constructor(private http:HttpClient) {

  }

  getQuery(section:string, category:string){
    let url= `https://newsapi.org/v2/${section}?country=us&category=${category}&pageSize=100&apiKey=828752108f5f4a0589b500bf31cbebc9`;
    return this.http.get(url);
  }

  getTopHeadliners(section:string = 'top-headlines', category:string = 'general' ){
    return this.getQuery(section, category);
  }

  getCustomQueryResults (query:string, 
                         from:string = '2019-04-03',
                         to:string = '2019-05-02', 
                         pageSize:string = '100', 
                         page:string = '1', 
                         sortBy:string = 'popularity'){
                           
    let url = `https://newsapi.org/v2/everything?q=${query}&language=en&from=${from}&to=${to}&pageSize=${pageSize}&page=${page}&sortBy=${sortBy}&apiKey=55f92b89c82b4571b0dac752e27a5ad4`;
    return this.http.get(url);
  }
}
