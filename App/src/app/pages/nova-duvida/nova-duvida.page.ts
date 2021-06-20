import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { User } from 'src/app/interfaces/user'
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';

@Component({
  selector: 'app-nova-duvida',
  templateUrl: './nova-duvida.page.html',
  styleUrls: ['./nova-duvida.page.scss'],
})
export class NovaDuvidaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  novaPergunta: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController,
    private navParamService: NavparamService
  ) {
    this.novaPergunta = this.navParamService.getNavData();
   }

  ngOnInit() {
  }

  telaPerguntas(){
    this.router.navigate(['duvida'])
  }

  pergunta: string = "";
  resposta: string = "";

  registro(){
    try{
      let body = {
        pergunta: this.pergunta,
        resposta: this.resposta
      };
      this.apiService.criarPergunta(this.pergunta, this.resposta, this.novaPergunta.id);       
    } catch(error){
      console.error(error);
    }
  }

}
