import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavController, MenuController, ModalController, LoadingController } from '@ionic/angular';
import { strings } from '../../config/strings';
import * as firebase from 'firebase/app';
import { TermsguestPage } from '../termsguest/termsguest.page';
import { DataService } from '../../services/data.service';
import $ from "jquery";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isDisabled: any = false;
  validationsform: FormGroup;
 plans: any =[];
 planid:any;
 isLoading = false;
 errors:any=['',null,undefined];
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
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
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

  tryRegister(value) {
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
	$('.cont-scti-all').show();
	//$('.cont-scti-in').hide();
    this.isDisabled = true;
	
    this.authService.doRegister(value)
    .then(res => {
      firebase.auth().currentUser.updateProfile({
        displayName : value.name,
    });
      this.modalCtrl.dismiss();
      this.router.navigate(['/plans']);
    }, err => {
    this.isDisabled = false;
      if (err.code === 'auth/email-already-in-use') {
        this.presentAlert(strings.ST36);
      } else {
        this.presentAlert(strings.ST32);
      }
    });  
	
	// this.modalCtrl.dismiss();
      //this.router.navigate(['/plans']);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
	  this.DataService.getDataPackages()
    .subscribe( resp => {
      console.log(resp)
      this.plans = resp;
      this.isLoading = false;
    });
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

  goClosePage() {
    this.modalCtrl.dismiss();
  }

  async goTermsPage() {

    const modal = await this.modalCtrl.create({
       component: TermsguestPage,
     });

    modal.present();

   }

}
