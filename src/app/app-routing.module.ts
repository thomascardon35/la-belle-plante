import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'}, // pathMatch : 'full' --> vérifie si toute l'url correspond
  {path: 'home', component: PageAccueilComponent},
  {path: 'details', component: PageDetailsComponent},
  {path: '**', component: PageNotFoundComponent} // '**' a mettre en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
