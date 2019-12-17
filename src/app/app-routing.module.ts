import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home/:section/:id', component: HomeComponent },
  { path: 'search/:query/:sort/:from/:to/:results/:page', component: SearchComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home/general/0' }
];

export const appRouting = RouterModule.forRoot(routes);
