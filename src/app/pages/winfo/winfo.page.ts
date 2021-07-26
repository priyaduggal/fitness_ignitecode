import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-winfo',
  templateUrl: './winfo.page.html',
  styleUrls: ['./winfo.page.scss'],
})

export class WinfoPage implements OnInit {

  @Input() description: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
