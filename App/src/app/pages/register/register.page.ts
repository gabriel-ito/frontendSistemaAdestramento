import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user'
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController,
    private alertCtrl: AlertController
  ) { }

  async showAlert(){
    const myAlert = await this.alertCtrl.create({
      header: 'Erro ao logar',
      message: 'E-mail ou senha inválidos',

      buttons: ['OK', 'CANCELAR']
    });

    myAlert.present();
  }

  ngOnInit() {
  }

  pagLogin(){
    this.router.navigate(['login'])  
  }

  nome: string = "";
  email: string = "";
  senha: string = "";
  endereco: string = "";
  telefone: string = "";

  registro(){
    try{
      let body = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        endereco: this.endereco,
        telefone: this.telefone
      };
      this.apiService.createAccount(this.nome, this.email, this.senha, this.endereco,this.telefone); 
      
    } catch(error){
      
    }
  }
  
  registroAdestrador(){
    this.router.navigate(['register-adestrador'])  
  }

}
