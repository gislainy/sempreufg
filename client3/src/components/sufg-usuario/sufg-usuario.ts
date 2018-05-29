import { Component } from '@angular/core';
import { SufgLoginComponent } from '../sufg-login/sufg-login';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the SufgUsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sufg-usuario',
  templateUrl: 'sufg-usuario.html'
})
export class SufgUsuarioComponent {

  text: string;
  user: Object = {};
  constructor(public navCtrl: NavController) {
    console.log('Hello SufgUsuarioComponent Component');
    this.text = 'Hello World';
  }
  finalizar() {
    this.navCtrl.push (SufgLoginComponent)
  }
}
