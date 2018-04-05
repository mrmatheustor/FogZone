import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EssenciasPage } from './essencias';

@NgModule({
  declarations: [
    EssenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(EssenciasPage),
  ],
})
export class EssenciasPageModule {}
