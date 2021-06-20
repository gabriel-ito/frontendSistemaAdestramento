import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';

@Component({
  selector: 'app-atendimento-adestrador',
  templateUrl: './atendimento-adestrador.page.html',
  styleUrls: ['./atendimento-adestrador.page.scss'],
})
export class AtendimentoAdestradorPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public folder: string;
  atendimentos: any;
  agendas = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
    private navParamService: NavparamService
    ) { 
      this.atendimentos = this.navParamService.getNavData();
      //console.log(this.question.id);

      let d = this.atendimentos.id;
      console.log(d);
      this.ionViewDidLoad(d);
    }

    ionViewDidLoad(id){
      this.ApiService.meusAtendimentosAdestrador(id).subscribe(
        dados => {
          this.agendas = dados as string[];
          console.log(dados)
        },
        (error) => console.log(error),
        () => console.log("Complete")
      )
    }  

  ngOnInit() {
  }

  telaAtendimento(){
    this.router.navigate(['atendimento'])
  }

}
