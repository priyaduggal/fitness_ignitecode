import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { strings } from '../../config/strings';
import {StreamingMedia, StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';
import { AdmobService } from '../../services/admob.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { EmbedVideoService } from 'ngx-embed-video';
import { VideoviewPage } from '../videoview/videoview.page';
import { ModalController,NavParams,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-edetails',
  templateUrl: './edetails.page.html',
  styleUrls: ['./edetails.page.scss']
})
export class EdetailsPage implements OnInit {

  public strings = strings;
  exercise: any = {};
  isLoading = false;
  id: any;
  isInfoHidden = true;
  isInstruHidden = true;
  isTipsHidden = true;
  orientation = 'landscape';
iframe_html:any;
 //yt_iframe_html: any;
 // vimeo_iframe_html: any;
 // dm_iframe_html: any;
  
 // vimeoUrl = "https://vimeo.com/197933516";
 // youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
 // dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";
  constructor(
  public modalController: ModalController,
    private embedService: EmbedVideoService,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private streamingMedia: StreamingMedia,
    private admob: AdmobService,
    private screenOrientation: ScreenOrientation
    ) {
		
	//this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
   // this.vimeo_iframe_html = this.embedService.embed(this.vimeoUrl);
   // this.dm_iframe_html = this.embedService.embed(this.dailymotionUrl);
	}

    ngOnInit() {
      this.admob.HideBannerAd();
      if( this.orientation === 'landscape') {
        this.setPortrait();

      }
    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          if (!this.id) {
            this.goBack();
          }
        }
      );
    }

    goBack() {
      this.router.navigate(['/home']);
    }

    toggleInfo() {
      this.isInfoHidden = !this.isInfoHidden;
    }

    toggleInstru() {
      this.isInstruHidden = !this.isInstruHidden;
    }

    toggleTips() {
      this.isTipsHidden = !this.isTipsHidden;
    }

    getDetails() {

    this.dataService.getDataExerciseById(this.id)
    .subscribe( resp => {

      this.exercise = resp[0];
      this.isLoading = false;

  } );
}

async play() {
	
	 const modal = await this.modalController.create({
		component: VideoviewPage,
		cssClass: 'confirmdelete',
		componentProps: {
	    url:this.exercise.exercise_video,
		}
		});
		modal.onDidDismiss().then((detail) => {
		});
    return await modal.present();  
	
 /*  const options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played'); },
    errorCallback: (e) => { console.log('Error streaming'); },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
  }; */

  // tslint:disable-next-line: max-line-length
 // this.streamingMedia.playVideo(this.exercise.exercise_video, options);
}

setPortrait() {
  // set to portrait
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
}

ionViewWillLeave(){
  this.setPortrait();
}
}
