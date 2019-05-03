import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articles:Array<any>;
  private article:Array<any>;
  private articleId;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsSubs => {
      this.articleId = paramsSubs['id'];
      this.article = this.articles[this.articleId];

      console.log(this.article);
    })
  }

  loadImage(element, path:string){
    element.style.backgroundImage = `linear-gradient(180deg, transparent, #222427), url(${path})`;
  }

}
