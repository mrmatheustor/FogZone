import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoEssenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-essencias',
  templateUrl: 'info-essencias.html',
})
export class InfoEssenciasPage {

  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEssenciasPage');
    console.log('Cor e tipo: ',this.info.color, this.info.type);
  }

}
