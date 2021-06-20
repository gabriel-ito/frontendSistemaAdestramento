import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PerguntaPage } from '../pergunta/pergunta.page';

@Component({
  selector: 'app-pag-inicial-adestrador',
  templateUrl: './pag-inicial-adestrador.page.html',
  styleUrls: ['./pag-inicial-adestrador.page.scss'],
})
export class PagInicialAdestradorPage implements OnInit {
  
  usuario : any;

  public adestradorId : string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private navCtrl: NavController,
    private navParamService: NavparamService,
    private router: Router) { 
      this.usuario = this.navParamService.getNavData();
      this.adestradorId = this.usuario.id;
    }

    telaDuvidas(){
      this.router.navigate(['home-adestrador'])
    }

    telaRespostas(){
      this.router.navigate(['resposta'])
    }
  
    telaAgendar(){
      this.router.navigate(['cadastrar-agenda'])
    }

    telaAgendamento(){
      this.router.navigate(['atendimento-adestrador'])
    }

    sair(){
      this.router.navigate(['login'])
    }

  ngOnInit() {
  }

}
