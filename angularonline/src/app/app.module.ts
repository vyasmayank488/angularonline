import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, SqrtPipe, FooterComponent, BannerThreeComponent, ContactUsComponent, BannerTwoComponent, ProductsComponent, BannerOneComponent, NavComponent, SimpleStyleDirective],
  imports: [BrowserModule], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}

// fileName.fileType.tech
// classNameModule

//  index.html  ->     .html : lib load
