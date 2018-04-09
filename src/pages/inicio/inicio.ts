import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EssenciasPage } from '../essencias/essencias';
import { MarcasPage } from '../marcas/marcas';
import { AddEssenciaPage } from '../add-essencia/add-essencia';
import { BdEssenciaPage } from '../bd-essencia/bd-essencia';
import { EssenciasApi } from '../../shared/essencias-api';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController:LoadingController, public essenciasApi:EssenciasApi) {
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
