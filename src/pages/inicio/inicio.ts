import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciasPage } from '../essencias/essencias';
import { MarcasPage } from '../marcas/marcas';
import { AddEssenciaPage } from '../add-essencia/add-essencia';
import { BdEssenciaPage } from '../bd-essencia/bd-essencia';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  goToFavs(){
    this.navCtrl.push(MarcasPage);
  }

  goToAdd(){
    this.navCtrl.push(AddEssenciaPage);
  }
  
  goToBd(){
    this.navCtrl.push(BdEssenciaPage);
  }

}
