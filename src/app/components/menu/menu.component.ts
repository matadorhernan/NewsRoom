import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  private section:string;

  @Input() articles:Array<any>;
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.section = params['section'];
    })
  }

  ngOnInit() {
  }

  loadImage(element, path:string){
    element.style.backgroundImage = `url(${path})`;
  }
}
