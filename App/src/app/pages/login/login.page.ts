import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user'
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { NavparamService } from 'src/app/navparam.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertCtrl: AlertController,
    private navParamService: NavparamService
  ) { }

  async showAlert(){
    const myAlert = await this.alertCtrl.create({
      header: 'Erro ao logar',
      message: 'E-mail ou senha inválidos',

      buttons: ['OK', 'CANCELAR']
    });

    myAlert.present();
  }

  ngOnInit() {}

  registro(){
    this.router.navigate(['register'])
  }

  telaCliente(){
    this.router.navigate(['pag-inicial-cliente'])
  }

  telaAdestrador(){
    this.router.navigate(['pag-inicial-adestrador'])
  }

  email: string = "";
  senha: string = "";
  usuario = [];
  
  entrar(){
      let body = {
        email: this.email,
        senha: this.senha
      };      
      var result = this.apiService.logar(body.email, body.senha).subscribe(
        dados => {
          this.usuario = dados as string[];

          this.teste(this.usuario);
        },
        () => this.entrarAdestrador()
      )  
  }

  entrarAdestrador(){
    let body = {
      email: this.email,
      senha: this.senha
    };      
    var result = this.apiService.logarAdestrador(body.email, body.senha).subscribe(
      dados => {
        this.usuario = dados as string[];

        this.teste2(this.usuario);
      }, () => this.showAlert()
    )
  }

  teste(result){
     let d = {
       'id' : result.dados.id,
       'nome' : result.dados.nome,
       'email' : result.dados.email
     }
    console.log(d);
    this.navParamService.setNavData(d);
    this.telaCliente();
  }

  teste2(result){
    let d = {
      'id' : result.dados.id,
      'nome' : result.dados.nome,
      'email' : result.dados.email
    }
   console.log(d);
   this.navParamService.setNavData(d);
   this.telaAdestrador();
 }

}
