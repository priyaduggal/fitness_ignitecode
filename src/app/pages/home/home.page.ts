import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor(public menuCtrl: MenuController,private dataService: DataService) {}

  public strings = strings;

  public innerHeight: any;

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'customMenu');
    this.dataService.getCount()
    .subscribe( resp => {
      this.data = resp[0];
    } );
   }

  ngOnInit() {
    this.innerHeight = window.innerHeight / 3 + 'px';
  }

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }

}
