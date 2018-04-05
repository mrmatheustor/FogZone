import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BdAddEssenciaPage } from '../bd-add-essencia/bd-add-essencia';

/**
 * Generated class for the BdEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd-essencia',
  templateUrl: 'bd-essencia.html',
})
export class BdEssenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BdEssenciaPage');
  }

  goToBdAdd(){
    this.navCtrl.push(BdAddEssenciaPage);
  }

}
