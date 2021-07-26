import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController} from '@ionic/angular';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { PaymentoptionsPage } from '../paymentoptions/paymentoptions.page';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  loading:any;
  paid = false;
  // products: IAPProduct[] = [];
  credits: any;
  totalCredits: any;
  plans: any =[];
  isLoading = false;

  constructor( private stripe: Stripe, public loadingController: LoadingController, 
  public router: Router, public modalCtrl: ModalController, public toastController: ToastController,
  private location: Location, private DataService: DataService) {
    this.stripe.setPublishableKey('pk_test_DE5DNXQD2inVoDZFXZ4cUz2n');

      // this.globalFooService.getObservable().subscribe((data) => {
      //       console.log('Data received', data);
      //       if(JSON.parse(localStorage.getItem('profile')).usertype == 'paid'){
      //         this.paid = true;
      //       }else{
      //         this.paid = false;
      //       }
      //   });

  }

  dismiss() {
    this.location.back();
  }

   logout(){
      localStorage.clear();
      console.log('clicked')
      this.router.navigate(['/login']);
    }

  ngOnInit() {
    this.isLoading = true;

    this.DataService.getDataPackages()
    .subscribe( resp => {
      console.log(resp)
      this.plans = resp;
      this.isLoading = false;
    });
  }

  // ionViewDidEnter(){
  //   this.totalCredits = JSON.parse(localStorage.getItem('profile')).credits;
  //   if(JSON.parse(localStorage.getItem('profile')).usertype == 'paid'){
  //     this.paid = true;
  //   }else{
  //     this.paid = false;
  //   }
  //   this.getCredits();
  // }

	slideOpts:any = {
	  slidesPerView: 1.2,
	  spaceBetween: 20,
	}
	slideOpts2:any = {
	  slidesPerView: 1.2,
	  spaceBetween: 20,
	}
	slideOpts3:any = {
	  slidesPerView: 1.2,
	  spaceBetween: 20,
	  centeredSlides: true,
	  initialSlide: 1,
	  speed: 400,
	}
  
 async makePayment(id){
	
	  const modal = await this.modalCtrl.create({
       component: PaymentoptionsPage,
	   
	   componentProps: {
		planid:id,
		}
     });

    modal.present();   
	  
	/*   
     let card = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 22,
      cvc: '121'
     }
     
     this.stripe.createCardToken(card)
        .then(token => console.log(token.id))
        .catch(error => console.error(error));  */
  }

  async presentLoading() {
    this.loading = await this.loadingController.create();
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
  };

	async presentToast(message,color) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom',
        color: color,
        // showCloseButton: true
      });
      toast.present();
    }
}
