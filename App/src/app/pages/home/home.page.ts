import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PerguntaPage } from '../pergunta/pergunta.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public folder: string;

  perguntas = [];
  usuario : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private navCtrl: NavController,
    private navParamService: NavparamService,
    private router: Router
    ) { 
      this.ionViewDidLoad();
      this.usuario = this.navParamService.getNavData();
    }

  ionViewDidLoad(){
    this.ApiService.query().subscribe(
      dados => {
        this.perguntas = dados as string[];
        console.log(dados)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }  

  mostrarDetalhes(dados){
    let d = {
      'id': dados.id,
      'pergunta' : dados.pergunta,
      'resposta' : dados.resposta
    }
    this.navParamService.setNavData(d);
    this.router.navigate(['pergunta/']);
  }

  novaDuvida(){
    this.router.navigate(['nova-duvida'])
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
