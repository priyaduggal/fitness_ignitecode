import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController} from '@ionic/angular';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {
  loading:any;
  email:any;
  details:any;
  paid = false;
  credits: any;
  totalCredits: any;
  subscriptions: any =[];
  isLoading = false;
  constructor( private firebase: FirebaseService,private stripe: Stripe, public loadingController: LoadingController, 
  public router: Router, public modalCtrl: ModalController, public toastController: ToastController,
  private location: Location, private DataService: DataService) { }

  ngOnInit() {
	   
  }
  async ionViewDidEnter(){
	  this.email = await this.firebase.getEmail();
	  this.getsubscriptions();
  }
  getsubscriptions()
  {
	  this.presentLoading();
		this.DataService.getusersubscriptions(this.email)
		.subscribe( resp => {
			this.stopLoading();
			this.subscriptions=resp;
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

}
