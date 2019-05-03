import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home/0' }
];

export const appRouting = RouterModule.forRoot(routes);
