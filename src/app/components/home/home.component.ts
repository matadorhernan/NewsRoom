import { Component, OnInit } from '@angular/core';
import { NewstationService } from '../../services/newstation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public loading:boolean = true;
  public articles:Array<any> = [];
  private section:string = 'general';

  constructor(private _newstation:NewstationService,
              private _activatedRoute:ActivatedRoute) {
                
    _activatedRoute.params.subscribe(params => {

      if (this.section != params['section']){
        this.loading = true;
      }

      this.section = params['section'];


      _newstation.getTopHeadliners('top-headlines', this.section).subscribe(newsSub => {
        this.articles = newsSub['articles'];
        this.loading = false;
      }) 

    })

    
  }

  ngOnInit() {  
  }

}
