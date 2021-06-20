import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';
import { PagInicialClientePage } from '../pag-inicial-cliente/pag-inicial-cliente.page';

@Component({
  selector: 'app-horario-selecionado',
  templateUrl: './horario-selecionado.page.html',
  styleUrls: ['./horario-selecionado.page.scss'],
})
export class HorarioSelecionadoPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  private slug: String;
  
  horario = [];
  data : any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, 
    private navParamService: NavparamService,
    public pagInicialCliente: PagInicialClientePage) {
      this.data = this.navParamService.getNavData();
      console.log(this.pagInicialCliente.usuarioId);
  }

  observacao: string = "";

  cadastrar(){
    try{
      let body = {
        observacao: this.observacao
      };
      this.apiService.cadastrarAtendimento(this.data.id, this.observacao, this.pagInicialCliente.usuarioId);
    } catch(error){
      console.error(error);
    }
  }

  ngOnInit() {
    //this.slug = this.route.snapshot.paramMap.get('id');
    //this.loadCheckList(this.slug);
  }

}