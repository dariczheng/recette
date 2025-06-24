import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecetteDetailComponent } from './recettes/recette-detail/recette-detail.component';
import { HomeComponent } from './recettes/home/home.component';
import { PageNotFoundComponent } from './recettes/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recette/:nom',
    component: RecetteDetailComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
