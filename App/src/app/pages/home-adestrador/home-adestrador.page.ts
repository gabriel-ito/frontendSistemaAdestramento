import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PerguntaPage } from '../pergunta/pergunta.page';
import { PagInicialAdestradorPage } from '../pag-inicial-adestrador/pag-inicial-adestrador.page';
@Component({
  selector: 'app-home-adestrador',
  templateUrl: './home-adestrador.page.html',
  styleUrls: ['./home-adestrador.page.scss'],
})
export class HomeAdestradorPage implements OnInit {

  public folder: string;
  
  perguntas = [];
  usuario : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private navCtrl: NavController,
    private navParamService: NavparamService,
    private router: Router,
    public pagInicialAdestrador: PagInicialAdestradorPage
    ) { 
      this.ionViewDidLoad();
      this.usuario = this.navParamService.getNavData();
      console.log(this.pagInicialAdestrador.adestradorId)
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
    this.router.navigate(['pergunta-adestrador/']);
  }

  novaDuvida(){
    this.router.navigate(['nova-duvida'])
  }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}