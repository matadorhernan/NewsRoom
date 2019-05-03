import { Component, OnInit } from '@angular/core';
import { NewstationService } from '../../services/newstation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading:boolean = true;
  public articles:Array<any> = [];

  constructor(private _newstation:NewstationService) {   
  }

  ngOnInit() {     
    this._newstation.getTopHeadliners().subscribe(newsSub => {
      this.articles = newsSub['articles'];
      this.loading = false;
    })
  }

  loadImage(element, path:string){
    element.style.backgroundImage = `url(${path})`;
  }

}
