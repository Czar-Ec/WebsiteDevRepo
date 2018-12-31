import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from '../components/content/home-content/home-content.component';
import { PageNotFoundComponent } from '../components/content/page-not-found/page-not-found.component';

const routes: Routes = [
  // automatically reroute to home when just the base URL is given
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeContentComponent },

  // 404 page
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
