import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent }        from './hero.component/hero.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { DashBoardComponent } from './dashboard.component/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
