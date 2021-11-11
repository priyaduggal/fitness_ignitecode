import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { ModalController,NavParams ,LoadingController} from '@ionic/angular';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.page.html',
  styleUrls: ['./videoview.page.scss'],
})
export class VideoviewPage implements OnInit {
url:any;
loading:any;
urlview:any;
  constructor(  private embedService: EmbedVideoService,private DataService: DataService,public loadingController: LoadingController,
  public modalController: ModalController,public navParams: NavParams) {
 this.url=navParams.get('url'); 	

 this.urlview = this.embedService.embed(this.url);
 }

  ngOnInit() {
  }
dismiss()
  {
	  this.modalController.dismiss({
      'dismissed': true
    });
	  
  }
}
