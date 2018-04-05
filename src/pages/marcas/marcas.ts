import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EssenciasApi } from '../../shared/essencias-api';
import { EssenciasPage } from '../essencias/essencias';
import * as _ from 'lodash';

/**
 * Generated class for the MarcasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marcas',
  templateUrl: 'marcas.html',
})
export class MarcasPage {

  marcae: any;
  similarEssence: any;
  string : "primary";

  constructor(public navCtrl: NavController, public navParams: NavParams, public essenciasApi: EssenciasApi, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarcasPage');

    let loader = this.loadingController.create({content: 'Carregando...'});
    loader.present().then(() => {

      this.essenciasApi.getMarcas().then(data => {
        this.marcae = data;
        console.log("Loaded.", data);
        loader.dismiss();
      });
    });

    this.similarEssence = _.chain(this.essenciasApi.getMarcas).filter(g => g.type == this.marcae.type).value();
    
  }

  marcaClicada($event, marca) {
    this.navCtrl.push(EssenciasPage, marca);
  }

}
