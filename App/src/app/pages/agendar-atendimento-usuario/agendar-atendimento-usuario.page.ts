import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PagInicialClientePage } from '../pag-inicial-cliente/pag-inicial-cliente.page';


@Component({
  selector: 'app-agendar-atendimento-usuario',
  templateUrl: './agendar-atendimento-usuario.page.html',
  styleUrls: ['./agendar-atendimento-usuario.page.scss'],
})
export class AgendarAtendimentoUsuarioPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public folder: string;

  perguntas = [];
  agenda : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
    private navParamService: NavparamService,
    public pagInicialCliente: PagInicialClientePage
    ) { 
      this.agenda = this.navParamService.getNavData();
      //console.log(this.question.id);

      let d = this.agenda.id;
      console.log(d);
      this.ionViewDidLoad(d);
      console.log(this.pagInicialCliente.usuarioId);
    }

  ionViewDidLoad(id){
    this.ApiService.horasDisponiveis(id).subscribe(
      dados => {
        this.perguntas = dados as string[];
        console.log(dados)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }  

  mostrarDetalhess(dados){
    let d = {
      'id': dados.id,
      'dataAgenda' : dados.dataAgenda
    }
    this.navParamService.setNavData(d);
    this.router.navigate(['horario-selecionado/']);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  telaPerguntas(){
    this.router.navigate(['duvida'])
  }
  
  novaDuvida(){
    this.router.navigate(['nova-duvida'])
  }
}
