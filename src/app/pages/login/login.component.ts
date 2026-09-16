import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = "";
  senha: string = "";
  botaoDesabilitado: boolean = true;

  onBotaoClicado() {
    alert("Bem Vindo(a)!")
  }
  teclaDigitada(event: KeyboardEvent): void {
    alert('O usuário digitou: ${event.key}');
  }
  validarFormulario(){
    if(this.login.trim() !=="$$this.senha.trim() !==") {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }
  fazerLogin() {
    if(this.login === 'admin' && this.senha === '123') {
      alert('Bem Vindo ${this.login}!');
    } else {
      alert('Dados inválidos');
    }
  }
}
