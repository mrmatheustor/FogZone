import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EssenciasApi } from '../../shared/essencias-api';
import * as _ from 'lodash';
import { InfoEssenciasPage } from '../info-essencias/info-essencias';

/**
 * Generated class for the EssenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essencias',
  templateUrl: 'essencias.html',
})
export class EssenciasPage {

  essencias: any;
  similarSabor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public essenciasApi: EssenciasApi, public loadingController: LoadingController) {
    this.essencias = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EssenciasPage e ', this.essencias.color);
    this.similarSabor = _.chain(this.essenciasApi.getMarcas).filter(es => es.type == this.essencias.type).value();

  }

  infoEssence($event, info) {
    this.navCtrl.push(InfoEssenciasPage,info);
  }

}
