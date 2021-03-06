import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ContentPipe } from './pipes/content.pipe';
import { AuthorPipe } from './pipes/author.pipe';
import { AgoDatePipe } from './pipes/ago-date.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { SectionsComponent } from './components/sections/sections.component';
import { SearchComponent } from './components/search/search.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { SortWordsPipe } from './pipes/sort-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    LoadingComponent,
    ContentPipe,
    AuthorPipe,
    AgoDatePipe,
    MenuComponent,
    SectionsComponent,
    SearchComponent,
    DateFormatterPipe,
    SortWordsPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
