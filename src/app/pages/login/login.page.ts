import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavController, MenuController, ModalController, LoadingController } from '@ionic/angular';
import { strings } from '../../config/strings';
import { ForgotpassPage } from '../forgotpass/forgotpass.page';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
loading:any;
  validationsform: FormGroup;

  constructor(
  private DataService: DataService,
    private authService: AuthService,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public loadingController: LoadingController
  ) { }

  // tslint:disable-next-line: variable-name
  private _strings = strings;
  public get strings() {
    return this._strings;
  }

  ngOnInit() {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    this.validationsform = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(regexp)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
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
  tryLogin(value) {
	 
    const controls = this.validationsform.controls;
    console.log(controls);
	 
    
    /** check form */
    if (this.validationsform.invalid)
    {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
	 this.presentLoading();
    this.authService.doLogin(value)
    .then(res => {
   
	  this.DataService.getuserdetails( controls.email.value)
		.subscribe( resp => {
		  this.stopLoading();
		if(resp['ok']=='ok')
		{
			 this.modalCtrl.dismiss();
			this.router.navigate(['/home']);
		}else{
			 this.modalCtrl.dismiss();
			this.router.navigate(['/plans']);
		}
		
		});
	 
    }, err => {
		  this.stopLoading();
      if (err.code === 'auth/wrong-password') {
        this.presentAlert(strings.ST30);
      } else if (err.code === 'auth/user-not-found') {
        this.presentAlert(strings.ST31);
      } else {
        this.presentAlert(strings.ST32);
      }
    });
  }

  async goRestPassPage() {

    const modal = await this.modalCtrl.create({
       component: ForgotpassPage,
     });

    modal.present();

   }

  goClosePage() {
    this.modalCtrl.dismiss();
  }

}
