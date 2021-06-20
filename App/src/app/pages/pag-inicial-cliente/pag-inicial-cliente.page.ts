import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PerguntaPage } from '../pergunta/pergunta.page';

@Component({
  selector: 'app-pag-inicial-cliente',
  templateUrl: './pag-inicial-cliente.page.html',
  styleUrls: ['./pag-inicial-cliente.page.scss'],
})
export class PagInicialClientePage implements OnInit {

  data : any;

  public usuarioId : string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private navCtrl: NavController,
    private navParamService: NavparamService,
    private router: Router) { 
      this.data = this.navParamService.getNavData();
      this.usuarioId = this.data.id;
      console.log(this.usuarioId);
    }

    telaDuvidas(){
      this.router.navigate(['home'])
    }

    telaMinhasDuvidas(){
      this.router.navigate(['duvida'])
    }
  
    telaAgendar(){
      this.router.navigate(['agenda'])
    }

    telaAgendamento(){
      this.router.navigate(['atendimento'])
    }

    sair(){
      this.router.navigate(['login'])
    }

  ngOnInit() {
  }

}
