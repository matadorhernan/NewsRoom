import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articles:Array<any>;
  private article:Array<any>;
  private section:string;
  private articleId;

  public prevEnabled:boolean = false;
  public nextEnabled:boolean = true;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsSubs => {

      this.articleId = paramsSubs['id'];
      this.section = paramsSubs['section'];
      this.article = this.articles[this.articleId];
      console.log(this.article);
      

    if (this.articleId > 0 ) {
      this.prevEnabled = true;
    } else {
      this.prevEnabled = false;
    }

    if (this.articleId == this.articles.length){
      this.nextEnabled = false;
    }else {
      this.nextEnabled = true;
    }
    
    })
  }

  loadImage(element, path:string){
    element.style.backgroundImage = `linear-gradient(180deg, transparent, #222427), url(${path})`;
  }

  changePage(instruction:string){

    let pager:number;
    let page:number;

    if (instruction == 'prev') {
      pager = 1;
    } else {
      pager = -1;
    }

    page = Number(this.articleId) - pager;

    console.log(page)

    this.router.navigate(['/home',this.section, page])




  }

}
