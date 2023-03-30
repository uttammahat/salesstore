import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionsPageRoutingModule } from './terms-and-conditions-page-routing.module';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';


@NgModule({
  declarations: [TermsAndConditionsPageComponent],
  imports: [
    CommonModule,
    TermsAndConditionsPageRoutingModule
  ]
})
export class TermsAndConditionsPageModule { }
