import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EssenciasApi } from '../../shared/essencias-api';

/**
 * Generated class for the CheckEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-essencia',
  templateUrl: 'check-essencia.html',
})
export class CheckEssenciaPage {

  essencia: any;
  sabor : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController : LoadingController, public essenciasApi: EssenciasApi) {
    this.essencia = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckEssenciaPage');

    let loader = this.loadingController.create({content: 'Carregando...'});
    
    loader.present().then(() => {

      this.essenciasApi.getSabor(this.essencia.id).then(data => {
        this.sabor = data;
        console.log("Loaded.", data);
        loader.dismiss();
      });
    });
    
  }

}
