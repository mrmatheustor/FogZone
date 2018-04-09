import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { EssenciasApi } from '../shared/essencias-api';
import { MarcasPage } from '../pages/marcas/marcas';
import { EssenciasPage } from '../pages/essencias/essencias';
import { LoginPage } from '../pages/login/login';
import { InicioPage } from '../pages/inicio/inicio';
import { InfoEssenciasPage } from '../pages/info-essencias/info-essencias';
import { AddEssenciaPage } from '../pages/add-essencia/add-essencia';
import { BdEssenciaPage } from '../pages/bd-essencia/bd-essencia';
import { BdAddEssenciaPage } from '../pages/bd-add-essencia/bd-add-essencia';
import { PrincipalPage } from '../pages/principal/principal';
import { CheckEssenciaPage } from '../pages/check-essencia/check-essencia';
import { ForumPage } from '../pages/forum/forum';

@NgModule({
  declarations: [
    MyApp,
    MarcasPage,
    LoginPage,
    CheckEssenciaPage,
    InfoEssenciasPage,
    AddEssenciaPage,
    BdEssenciaPage,
    ForumPage,
    BdAddEssenciaPage,
    PrincipalPage,
    InicioPage,
    EssenciasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MarcasPage,
    LoginPage,
    CheckEssenciaPage,
    InfoEssenciasPage,
    AddEssenciaPage,
    BdEssenciaPage,
    ForumPage,
    BdAddEssenciaPage,
    PrincipalPage,
    InicioPage,
    EssenciasPage
  ],
  providers: [
    StatusBar,
    EssenciasApi,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
