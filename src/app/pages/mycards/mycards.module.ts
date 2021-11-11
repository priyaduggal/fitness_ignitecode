import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycardsPageRoutingModule } from './mycards-routing.module';

import { MycardsPage } from './mycards.page';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	ComponentsModule,
    MycardsPageRoutingModule
  ],
  declarations: [MycardsPage]
})
export class MycardsPageModule {}
