import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { User } from 'src/app/interfaces/user'
import { ApiService } from 'src/app/services/api.service';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';

@Component({
  selector: 'app-cadastrar-agenda',
  templateUrl: './cadastrar-agenda.page.html',
  styleUrls: ['./cadastrar-agenda.page.scss'],
})
export class CadastrarAgendaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  novaAgenda: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController,
    private navParamService: NavparamService) {
    this.novaAgenda = this.navParamService.getNavData();
   }
  ngOnInit() {
  }

  telaCadastrarAgenda(){
    this.router.navigate(['cadastrar-agenda'])
  }

  voltar(){
    this.router.navigate(['pag-inicial-adestrador'])
  }

  dataAgenda: string = "";
  observacao: string = "";

  agenda(){
    try{
      let body = {
        dataAgenda: this.dataAgenda,
        observacao: this.observacao
      };
      this.apiService.criarAgenda(this.dataAgenda, this.observacao, this.novaAgenda.id);       
    } catch(error){
      console.error(error);
    }
  }

}
