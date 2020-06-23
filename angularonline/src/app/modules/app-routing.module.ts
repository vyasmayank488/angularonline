import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../layouts/home/home.component';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { BooksComponent } from '../products/books/books.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { PensComponent } from '../products/pens/pens.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mobile', component: MobPartComponent },
  { path: 'books', component: BooksComponent },
  { path: 'lapi', component: LaptopsComponent },
  { path: 'pen', component: PensComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
