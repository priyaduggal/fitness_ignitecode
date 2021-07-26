import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController, LoadingController ,NavParams} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentoptions',
  templateUrl: './paymentoptions.page.html',
  styleUrls: ['./paymentoptions.page.scss'],
})
export class PaymentoptionsPage implements OnInit {
options:any;
planid:any;
errors=['',null,undefined];
  constructor( public navParams: NavParams,public modalController: ModalController, public router: Router,
  public loadingController: LoadingController) {

 this.planid=navParams.get('planid');

 }

  ngOnInit() {
  }
  async presentAlert(value) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: value,
      mode: 'ios'
    });
    await loading.present();
  }
    dismiss()
  {
	  this.modalController.dismiss({
      'dismissed': true
    });
	  
  }
  save()
  {
	  if(this.errors.indexOf(this.options)>=0)
	  {
		 this.presentAlert("Please select payment method");
		 return false;
	  }
	  
	  if(this.options=='stripe')
	  {
		  this.dismiss();
		  this.router.navigate(['/pay-stripe/'+this.planid]);
	  }else
	  {
		   this.presentAlert("This is currently not available ");
		    return false;
	  }
		  
	  
  }

}
