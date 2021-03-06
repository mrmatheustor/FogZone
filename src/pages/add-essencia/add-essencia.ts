import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EssenciasApi } from '../../shared/essencias-api';
import { CheckEssenciaPage } from '../check-essencia/check-essencia';

/**
 * Generated class for the AddEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-essencia',
  templateUrl: 'add-essencia.html',
})
export class AddEssenciaPage {
  sabor : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController : LoadingController, public essenciasApi : EssenciasApi) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEssenciaPage');

    let loader = this.loadingController.create({content: 'Carregando...'});
    
    loader.present().then(() => {

      this.essenciasApi.getMarcas().then(data => {
        this.sabor = data;
        console.log("Loaded.", data);
        loader.dismiss();
      });
    });
    
  }

  goToCheck($event, param) {
    this.navCtrl.push(CheckEssenciaPage, param)
  }

}
