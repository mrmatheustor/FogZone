import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: PrincipalPage },
      { title: 'Essências', component: InicioPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
