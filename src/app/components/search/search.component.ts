import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewstationService } from '../../services/newstation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public newsQuery:string;
  public newsSort:string;
  public newsFrom:string;
  public newsTo:string;
  public newsPageSize:string;
  public newsPage:string;


  private results:Array<any>;
  public loading:boolean = true;

  constructor(private _ActivatedRoute:ActivatedRoute, private _newstationService:NewstationService) { }

  ngOnInit() {

    this._ActivatedRoute.params.subscribe(params => {

      this.newsQuery =  params['query'];
      this.newsSort =  params['sort'];
      this.newsFrom =  params['from'];
      this.newsTo =  params['to'];
      this.newsPageSize =  params['results'];
      this.newsPage =  params['page'];


     this._newstationService.getCustomQueryResults(this.newsQuery, 
                                                   this.newsFrom, 
                                                   this.newsTo, 
                                                   this.newsPageSize, 
                                                   this.newsPage, 
                                                   this.newsSort).subscribe(resSub => {
     this.results = resSub['articles'];
     console.log(this.results)
     this.loading = false;
    });

    })


  }

  loadImage(element, presenter, path:string){

    if(path == null){
      presenter.style.height = '0px';
    }
    element.style.backgroundImage = `url(${path})`;

  }
}
