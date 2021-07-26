import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinfoPageRoutingModule } from './winfo-routing.module';

import { WinfoPage } from './winfo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WinfoPage]
})
export class WinfoPageModule {}
