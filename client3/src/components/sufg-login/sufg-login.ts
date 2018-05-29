import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { SufgCadastrarUsuarioComponent } from '../sufg-cadastrar-usuario/sufg-cadastrar-usuario';

/**
 * Generated class for the SufgLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sufg-login',
  templateUrl: 'sufg-login.html'
})
export class SufgLoginComponent {
  private user = {};
  text: string;

  constructor(public navCtrl: NavController) {
  }
  registrar() {
    debugger
    this.navCtrl.push(SufgCadastrarUsuarioComponent);
  }

}
