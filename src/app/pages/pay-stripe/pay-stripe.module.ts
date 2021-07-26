import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { PayStripePageRoutingModule } from './pay-stripe-routing.module';

import { PayStripePage } from './pay-stripe.page';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
  
    IonicModule,
	FormsModule,
	ReactiveFormsModule,
    PayStripePageRoutingModule
  ],
  declarations: [PayStripePage]
})
export class PayStripePageModule {}
