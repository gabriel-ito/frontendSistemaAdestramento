import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { LoginPage } from '../login/login.page';
import { PagInicialAdestradorPage } from '../pag-inicial-adestrador/pag-inicial-adestrador.page';

@Component({
  selector: 'app-pergunta-adestrador',
  templateUrl: './pergunta-adestrador.page.html',
  styleUrls: ['./pergunta-adestrador.page.scss'],
})
export class PerguntaAdestradorPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  private slug: String;
  
  perguntas = [];
  data : any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, 
    private navParamService: NavparamService,
    private login: LoginPage,
    public pagInicialAdestrador: PagInicialAdestradorPage) {
      this.data = this.navParamService.getNavData();
      //console.log(this.data);
  }

  resposta: string = "";

  responder(){
    try{
      let body = {
        resposta: this.resposta
      };
      this.apiService.responderPergunta(this.data.id, this.resposta, this.pagInicialAdestrador.adestradorId);
    } catch(error){
      console.error(error);
    }
  }

  ngOnInit() {
    //this.slug = this.route.snapshot.paramMap.get('id');
    //this.loadCheckList(this.slug);
  }

}