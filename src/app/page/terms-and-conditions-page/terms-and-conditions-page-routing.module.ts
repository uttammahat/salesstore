import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: TermsAndConditionsPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndConditionsPageRoutingModule { }
