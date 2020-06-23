import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// step 2: import -> RouterModule, Routes

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { BooksComponent } from './products/books/books.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { PensComponent } from './products/pens/pens.component';

// let name: string;
// step 4: { path: 'mobile', component: MobPartComponent }
const appRoutes: Routes = [
  { path: 'mobile', component: MobPartComponent },
  { path: 'books', component: BooksComponent },
  { path: 'lapi', component: LaptopsComponent },
  { path: 'pen', component: PensComponent },
];

// step 5: nav.compo.html

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirective,
    MobPartComponent,
    BooksComponent,
    LaptopsComponent,
    PensComponent,
  ],
  //  step 3: RouterModule.forRoot(appRoutes)
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}

// fileName.fileType.tech
// classNameModule

//  index.html  ->     .html : lib load
