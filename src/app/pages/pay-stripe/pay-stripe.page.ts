import { Component, OnInit } from '@angular/core';
import { Stripe } from "@ionic-native/stripe/ngx";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router ,ActivatedRoute} from '@angular/router';
import { DataService } from '../../services/data.service';
import { ModalController, ToastController, LoadingController,NavParams,AlertController} from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-pay-stripe',
  templateUrl: './pay-stripe.page.html',
  styleUrls: ['./pay-stripe.page.scss'],
})
export class PayStripePage implements OnInit {
submitted = false;
cardForm: FormGroup;
email:any
reg_exp:any;
planid:any;
cards=[];
isLoading = false;
 loading:any;
 name:any;
  constructor(  private router: Router,
    private loadingController: LoadingController,
  public activatedRoute: ActivatedRoute,
  public alertController: AlertController,
  private firebase: FirebaseService,
  public toastController: ToastController,
  private formBuilder: FormBuilder,private DataService: DataService,private stripe: Stripe) { 
  this.createCardForm();
  
  }
async presentToast(message,color) {
      const toast = await this.toastController.create({
        message: message,
        duration: 5000,
        position: 'bottom',
        color: color,
         showCloseButton: true
      });
      toast.present();
    }
  ngOnInit() {
  }
  addcard()
  {
	  
  }
  get form() {
		return this.cardForm.controls;
	}
	
	checkDigit(e) {
		var val = e.target.value;
		var v = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
		var matches = v.match(/\d{4,16}/g);
		var match = (matches && matches[0]) || "";
		var parts = [];

		for (var i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}
		console.log(parts);

		if (parts.length) {
			return parts.join(" ");
		} else {
			return val;
		}
	}
	
	validateCard: any = false;
	validateExpMonthYear: any = false;

	saveCard1(value: any): void {
  
     /*   
		this.submitted = true;
		if (this.cardForm.invalid) {
			return;
		} */
		  //this.add(value);
		
	   /*  this.presentLoading();
		this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
		this.stripe.validateCardNumber(value.number).then((res) => {
		console.log(res);
		if(res=='OK')

		{
		
		this.stripe.validateExpiryDate(value.expMonth,value.expYear).then((res) => {
	    this.add(value);
		}).catch((error) => {
       this.stopLoading();
		this.presentToast(error, 'danger');
		console.error(error);
		return false;
		});

		}else{
			 this.stopLoading();
		}
		}).catch((error) => {
	  this.stopLoading();
		this.presentToast(error, 'danger');
		console.error(error);
		return false;
		
		}); */

}
  createCardForm() {
	  
	  this.reg_exp = /^[0-9]*$/;
  
		this.cardForm = this.formBuilder.group(
			{
				cardName: [ "", [ Validators.required ] ],
				number: [ "", [ Validators.required, Validators.pattern(this.reg_exp) ] ],
				expMonth: [ "", [ Validators.required , Validators.pattern(this.reg_exp)] ],
				expYear: [ "", [ Validators.required, Validators.pattern(this.reg_exp) ] ],
			    cvv: [ "", [ Validators.required, Validators.pattern(this.reg_exp) ] ]
			},
			{}
		);
	}
	async ionViewDidEnter() {
		 this.planid = this.activatedRoute.snapshot.paramMap.get('id');
		 this.email = await this.firebase.getEmail();
		 this.name = await this.firebase.getDisplayName();
	   
	}
saveCard(value: any): void {
  this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
		
     this.presentToast('Please Wait', 'success');  
		this.submitted = true;
		if (this.cardForm.invalid) {
			return;
		}
		 
     let card = {
      number: value.number,
      expMonth: value.expMonth,
      expYear: value.expYear,
      cvc: value.cvv,
     }
	 
	 
	  let fullcard = {
      number: value.number,
      expMonth: value.expMonth,
      expYear: value.expYear,
      cvc: value.cvv,
	  name:value.cardName,
     }
	 
	
    /*  this.stripe.createCardToken(card)
	.then((token) => {
		this.save(token.id,JSON.stringify(fullcard)
	}),
	.catch((error) => {
		this.stopLoading();
		this.presentToast(error, 'error');
	}) */
	this.stripe.createCardToken(card)
	.then(token => 
	
		this.save(token.id,JSON.stringify(fullcard))
		)
        .catch(error => 
		this.presentToast(error, 'danger')
		
		);  
		
	
	
		
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
save(token,fullcard){	
		this.presentLoading();
		this.DataService.poststripedetails( fullcard,token,this.planid,this.email,this.name)
		.subscribe( resp => {
				this.stopLoading();
				//this.recentposts = resp;
				console.log(resp);

				this.isLoading = false;
				//this.presentToast('Free trail activated successfully', 'success');
				localStorage.setItem('user_paid','true');
				this.router.navigate(['/home']);
				this.presentAlert();
				});


		}

async presentAlert() {
		
	const alert = await this.alertController.create({
	header: 'Welcome!',
	cssClass: 'alert-cas',
	subHeader: 'Your 7 day-free trial has been started successfully. You will be charged based on your plan once the trial period expires.',
	message: '',
	});

	await alert.present();
	}
		
}
		
	
	



