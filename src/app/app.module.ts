import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { EllipsisModule } from 'ngx-ellipsis';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { MainNavbarComponent } from './navigation-bars/main-navbar/main-navbar.component';
import { TopNavbarComponent } from './navigation-bars/top-navbar/top-navbar.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BreadcrumbComponent,
    ScrollToTopComponent,
    MainNavbarComponent,
    TopNavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
