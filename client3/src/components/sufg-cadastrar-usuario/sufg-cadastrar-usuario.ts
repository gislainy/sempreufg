import { Component } from '@angular/core';
import { listaDePerguntas, PerguntaCadastroUsuario } from './sufg-cadastro-usuario-dado';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { SufgLoginComponent } from '../sufg-login/sufg-login';
import { SufgUsuarioComponent } from '../sufg-usuario/sufg-usuario';
/**
 * Generated class for the SufgCadastrarUsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sufg-cadastrar-usuario',
  templateUrl: 'sufg-cadastrar-usuario.html'
})
export class SufgCadastrarUsuarioComponent {

  private pergunta: PerguntaCadastroUsuario;
  private alternativa;
  private perguntaAtual = 0;
  private respostas = [];
  private finalizou = false;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController) {
    this.pergunta = listaDePerguntas[this.perguntaAtual];
  }
  avancar() {
    if (!this.alternativa) {
      this.toastCtrl.create({
        message: 'Escolha pelo menos uma alternativa!',
        duration: 3000,
        position: 'top',
      }).present();
    } else {
      if (this.respostas.every(r => r.perguntaId != this.pergunta._id)) {
        const obj = {
          perguntaId: this.pergunta._id,
          resposta: this.alternativa
        }
        this.respostas.push(obj);
      } else {
        this.respostas = this.respostas.map(r => {
          if (r.perguntaId === this.pergunta._id) {
            r.resposta = this.alternativa;
          }
          return r;
        })
      }
      this.alternativa = null;
      this.perguntaAtual++;
      if ((listaDePerguntas.length - 1) != this.perguntaAtual)
        this.pergunta = listaDePerguntas[this.perguntaAtual];
      else
        this.finalizou = true;
    }
  }
  concluir() {
    if (this.finalizou) {
      debugger
      const estaoCorreta = this.respostas.every(r => {
        return listaDePerguntas.some(p => {
          if (p._id === r.perguntaId) {
            return p.alternativas.some(a => {
              if (a.title == r.resposta) return a.correta;
            });
          }
        });
      });
      if (estaoCorreta) {
        this.navCtrl.push(SufgUsuarioComponent)
      } else {
        this.toastCtrl.create({
          message: 'Desculpa, os dados informados não corresponde! Tente novamente ou contacta o nosso suporte!',
          position: 'top',
          duration: 6000,
        }).present();
        this.finalizou = false;
      }
      console.log('estaoCorreta', estaoCorreta);
    }
  }
  voltar() {
    this.finalizou = false;
    this.perguntaAtual--;
    this.pergunta = listaDePerguntas[this.perguntaAtual];
  }
}
