import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinfoPage } from './winfo.page';

const routes: Routes = [
  {
    path: '',
    component: WinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinfoPageRoutingModule {}
