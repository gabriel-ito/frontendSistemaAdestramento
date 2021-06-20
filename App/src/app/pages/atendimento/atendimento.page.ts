import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.page.html',
  styleUrls: ['./atendimento.page.scss'],
})
export class AtendimentoPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public folder: string;

  agendas = [];
  atendimento: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
    private navParamService: NavparamService
    ) { 
      this.atendimento = this.navParamService.getNavData();
      //console.log(this.question.id);

      let d = this.atendimento.id;
      console.log(d);
      this.ionViewDidLoad(d);
    }

    ionViewDidLoad(id){
      this.ApiService.meusAtendimentos(id).subscribe(
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
