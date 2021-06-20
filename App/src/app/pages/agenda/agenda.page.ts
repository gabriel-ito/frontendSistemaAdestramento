import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NavparamService } from 'src/app/navparam.service';
import { PagInicialClientePage } from '../pag-inicial-cliente/pag-inicial-cliente.page';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  adestradores = [];

  constructor(
    private router: Router,
    private ApiService: ApiService,
    private navParamService: NavparamService,
    public pagInicialCliente: PagInicialClientePage) { 
      this.ionViewDidLoad();
      console.log(this.pagInicialCliente.usuarioId);
    }

  ionViewDidLoad(){
    this.ApiService.adestradores().subscribe(
      dados => {
        this.adestradores = dados as string[];
        console.log(dados)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }  

  mostrarDetalhes(dados){
    let d = {
      'id': dados.id,
      'nome' : dados.pergunta
    }
    this.navParamService.setNavData(d);
    this.router.navigate(['agendar-atendimento-usuario/']);
  }

  ngOnInit() {
  }

  telaAgenda(){
    this.router.navigate(['agenda'])
  }

}
