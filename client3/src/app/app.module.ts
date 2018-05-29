import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SufgLoginComponent} from '../components/sufg-login/sufg-login';
import { SufgCadastrarUsuarioComponent} from '../components/sufg-cadastrar-usuario/sufg-cadastrar-usuario';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SufgUsuarioComponent } from '../components/sufg-usuario/sufg-usuario';


const pages = [
  { component: HomePage, name: "Home", segment: "home" },
  { component: SufgLoginComponent, name: "Login", segment: "login" },
  { component: SufgCadastrarUsuarioComponent, name: "Validar Usuário", segment: "validar-usuario" },
  { component: SufgUsuarioComponent, name: "Cadastrar Usuário", segment: "cadastrar-usuario" },
]

@NgModule({
  declarations: [
    MyApp,
    ...pages.map(p => p.component)
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: pages
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...pages.map(p => p.component)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
