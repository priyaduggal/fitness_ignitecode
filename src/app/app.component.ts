import { Component } from '@angular/core';
import { Platform, NavController ,AlertController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { strings } from './config/strings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
paid:any;
errors=['',null,undefined];
  public signout = strings.ST8;

  public appPages = [
    {
      title: strings.ST10,
      url: '/workouts',
      icon: 'md-calendar'
    },
    {
      title: strings.ST2,
      url: '/exercises',
      icon: 'md-fitness'
    },
    {
      title: strings.ST3,
      url: '/diets',
      icon: 'md-restaurant'
    },
    {
      title: strings.ST4,
      url: '/posts',
      icon: 'md-list-box'
    },
    /* {
      title: strings.ST5,
      url: '/motivation',
      icon: 'md-quote'
    }, */
    {
      title: strings.ST105,
      url: '/calculator',
      icon: 'md-calculator'
    },
    {
      title: strings.ST6,
      url: '/profile',
      icon: 'md-person'
    },
    {
      title: strings.ST7,
      url: '/aboutus',
      icon: 'md-bookmark'
    },
	 {
      title: 'Manage Cards',
      url: '/mycards',
      icon: 'md-card'
    },
    {
      title: 'Subscriptions',
      url: '/subscriptions',
      icon: 'md-card'
    },
   
    
  ];

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
	public alertController: AlertController,
	private DataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( async () => {
      await this.afAuth.user.subscribe(user => {
        if (user) {
			
		this.DataService.getuserdetails( user.email)
		.subscribe( resp => {
		
		if(resp['ok']=='ok')
		{
			this.router.navigate(['/home']);
		}else{
			
			this.router.navigate(['/plans']);
		}
		
		});	
			
			
		/* this.paid=localStorage.getItem('user_paid');
		
		if(this.errors.indexOf(this.paid)==-1)
		{
          this.router.navigate(['/home']);
		}else
		{
			 this.router.navigate(['/plans']);
		} */
        } else {
          this.router.navigate(['/start']);
        } 
      }, err => {
        this.router.navigate(['/start']);
      }, () => {
        this.splashScreen.hide();
      });
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.pop();
	  localStorage.setItem('user_paid','');
    }, err => {
      console.log(err);
    });
  }

}
