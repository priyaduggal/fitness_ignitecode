import { Component, OnInit } from '@angular/core';
import { Stripe } from "@ionic-native/stripe/ngx";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router ,ActivatedRoute} from '@angular/router';
import { DataService } from '../../services/data.service';
import { ModalController, ToastController, LoadingController,NavParams,AlertController} from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.page.html',
  styleUrls: ['./editcard.page.scss'],
})
export class EditcardPage implements OnInit {
submitted = false;
cardForm: FormGroup;
email:any
reg_exp:any;
planid:any;
details:any;
cards=[];
isLoading = false;
 loading:any;
 cardid:any;
 name:any;
 expMonth:any;
 expYear:any;
 number:any;
 cvv:any;
  constructor(private router: Router,
    private loadingController: LoadingController,
  public activatedRoute: ActivatedRoute,
  public alertController: AlertController,
  private firebase: FirebaseService,
  public toastController: ToastController,
  private formBuilder: FormBuilder,private DataService: DataService,private stripe: Stripe) {

this.cardid = activatedRoute.snapshot.paramMap.get('id');
this.getcarddetails();
this.createCardForm();


	  }
	  createCardForm() {
	  
	  this.reg_exp = /^[0-9]*$/;
  console.log(' this.name', this.name);
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
		 this.cardid = this.activatedRoute.snapshot.paramMap.get('id');
		// this.getcarddetails();
	}
	getcarddetails()
	{
		this.presentLoading();
		this.DataService.getcarddetails(this.cardid)
		.subscribe( resp => {
			this.stopLoading();
			this.details=resp;
			console.log(this.details[0].name);
			this.name=this.details[0].name;
			console.log('patch');
			this.cardForm.patchValue({
			cardName:this.details[0].name,
			number: this.details[0].number,
			expMonth: this.details[0].expMonth,
			expYear: this.details[0].expYear,
			cvv: this.details[0].cvc,
			});
		});
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
  async presentLoading() {
    this.loading = await this.loadingController.create({
          mode:"ios"
    });
      await this.loading.present();
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
  ngOnInit() {
  }
   get proform() {
    return this.cardForm.controls;
  }
  async presentToast(message,color) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom',
        color: color,
         showCloseButton: true
      });
      toast.present();
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
			
			
	    if(res=='OK'){
			this.presentLoading();
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


			this.DataService.editcarddetails(JSON.stringify(fullcard),this.cardid)
			.subscribe( resp => {
		this.stopLoading();
			this.presentToast('Card Updated Successfully', 'success');
			this.router.navigate(['/mycards']);
			});

		}
		
		
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


add(value){
		
	
     
		

		
}

}
