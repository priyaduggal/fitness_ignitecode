import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams ,LoadingController} from '@ionic/angular';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-confirmdelete',
  templateUrl: './confirmdelete.page.html',
  styleUrls: ['./confirmdelete.page.scss'],
})
export class ConfirmdeletePage implements OnInit {
id:any;
loading:any;
  constructor(private DataService: DataService,public loadingController: LoadingController,
  public modalController: ModalController,public navParams: NavParams) {
 this.id=navParams.get('id'); 	
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
  
delete()
{
	
	this.presentLoading();
		this.DataService.deletecard(this.id)
    .subscribe( resp => {
		
		this.stopLoading();
      console.log(resp)
	   this.presentAlert('Card deleted successfully');
      this.dismiss();
		
     
    });		
				
	
}
 dismiss()
  {
	  this.modalController.dismiss({
      'dismissed': true
    });
	  
  }
  ngOnInit() {
  }

}
