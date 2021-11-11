import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { config } from '../../config/config';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
cards:any=[];
  public strings = strings;
  public config = config;
  data:any;
  constructor( private iab: InAppBrowser, public http: HttpClient ) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  ngOnInit() {
    this.http.get(config.Url + '/json/data_strings.php')
    .subscribe(data => {
      console.log(data)
        this.data = data[0];
      }, error => {
      console.log(error);
    });
  }

  openUrl(url) {
    this.iab.create( url, '_system' );
  }

}
