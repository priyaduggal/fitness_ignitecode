import { Component, OnInit } from '@angular/core';
import { Stripe } from "@ionic-native/stripe/ngx";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router ,ActivatedRoute} from '@angular/router';
import { DataService } from '../../services/data.service';
import { ModalController, ToastController, LoadingController,NavParams} from '@ionic/angular';
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
 isLoading = false;
  constructor(  private router: Router,
  public activatedRoute: ActivatedRoute,
  private firebase: FirebaseService,
  public toastController: ToastController,
  private formBuilder: FormBuilder,private DataService: DataService,private stripe: Stripe) { 
  this.createCardForm();
  
  }
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
  ngOnInit() {
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

	saveCard(value: any): void {

       
		this.submitted = true;
		if (this.cardForm.invalid) {
			return;
		}

		this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
		this.stripe.validateCardNumber(value.number).then((res) => {
		console.log(res);
		if(res=='OK')

		{

		this.stripe.validateExpiryDate(value.expMonth,value.expYear).then((res) => {
	    this.add(value);
		}).catch((error) => {
        
		this.presentToast(error, 'danger');
		console.error(error);
		return false;
		});

		}
		}).catch((error) => {
	
		this.presentToast(error, 'danger');
			console.error(error);
		return false;
		
		});

}
  createCardForm() {
	  
	  this.reg_exp = /^[0-9]*$/;
  
		this.cardForm = this.formBuilder.group(
			{
				cardName: [ "", [ Validators.required ] ],
				number: [ "", [ Validators.required, Validators.pattern(this.reg_exp) ] ],
				expMonth: [ "", [ Validators.required ] ],
				expYear: [ "", [ Validators.required ] ],
			    cvv: [ "", [ Validators.required ] ]
			},
			{}
		);
	}
	async ionViewDidEnter() {
		 this.planid = this.activatedRoute.snapshot.paramMap.get('id');
		 
       this.email = await this.firebase.getEmail();
	   
	}
add(value){
	  this.isLoading = true;
     let card = {
      number: value.number,
      expMonth: value.expMonth,
      expYear: value.expYear,
      cvc: value.cvv
     }
	 
     this.stripe.createCardToken(card)
        .then(token => this.save(token.id))
        .catch(error => console.error(error));  
		
}
save(token){	
	this.isLoading = true;
		this.DataService.poststripedetails( token,this.planid,this.email)
		.subscribe( resp => {
		//this.recentposts = resp;
		console.log(resp);
		
		this.isLoading = false;
		this.presentToast('Free trail activated successfully', 'success');
	  localStorage.setItem('user_paid','true');
		 this.router.navigate(['/home']);
		});


		} 
}
		
	
	



