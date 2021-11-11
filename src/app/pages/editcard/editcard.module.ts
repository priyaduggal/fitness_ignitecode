import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcardPageRoutingModule } from './editcard-routing.module';

import { EditcardPage } from './editcard.page';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,ComponentsModule,
    IonicModule,
    EditcardPageRoutingModule
  ],
  declarations: [EditcardPage]
})
export class EditcardPageModule {}
