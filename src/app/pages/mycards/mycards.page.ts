import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { config } from '../../config/config';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { FirebaseService } from '../../services/firebase.service';
import { ModalController,NavParams,LoadingController } from '@ionic/angular';
import { ConfirmdeletePage } from '../confirmdelete/confirmdelete.page';
@Component({
  selector: 'app-mycards',
  templateUrl: './mycards.page.html',
  styleUrls: ['./mycards.page.scss'],
})
export class MycardsPage implements OnInit {
cards:any=[];
loading:any;
isLoading = false;
email:any;
public strings = strings;
  public config = config;
  data:any;
  constructor( public loadingController: LoadingController, public modalController: ModalController, private firebase: FirebaseService,private DataService: DataService, private iab: InAppBrowser, public http: HttpClient ) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  ngOnInit() {
	  
	/*    this.DataService.getUsercards()
    .subscribe( resp => {
      console.log(resp)
      this.cards = resp;
      this.isLoading = false;
    }); */
	  
    this.http.get(config.Url + '/json/data_strings.php')
    .subscribe(data => {
      console.log(data)
        this.data = data[0];
      }, error => {
      console.log(error);
    });
  }
async presentLoading() {
    this.loading = await this.loadingController.create({
          mode:"ios"
    });
      await this.loading.present();
  }
  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
getcards()
{
			this.presentLoading();
			this.DataService.getUsercards(this.email)
			.subscribe( resp => {
			this.stopLoading();
			console.log(resp)
			this.cards = resp;
			this.isLoading = false;
			});		

				
}
async delete(id)
	{
	
	   const modal = await this.modalController.create({
		component: ConfirmdeletePage,
		cssClass: 'confirmdelete',
		componentProps: {
	    title:'delete',
		id:id,
		}
		});

		modal.onDidDismiss().then((detail) => {
		 this.getcards();
		});
    return await modal.present();  
	}
	async ionViewDidEnter() {

		 this.email = await this.firebase.getEmail();
		 this.getcards();
	   
	}
  openUrl(url) {
    this.iab.create( url, '_system' );
  }

}
