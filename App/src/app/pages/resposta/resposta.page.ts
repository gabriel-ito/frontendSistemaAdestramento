import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';


@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.page.html',
  styleUrls: ['./resposta.page.scss'],
})
export class RespostaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public folder: string;
  respostas: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
    private navParamService: NavparamService
    ) { 
      this.respostas = this.navParamService.getNavData();
      //console.log(this.question.id);

      let d = this.respostas.id;
      console.log(d);
      this.ionViewDidLoad(d);
    }

  ionViewDidLoad(id){
    this.ApiService.minhasRespostas(id).subscribe(
      dados => {
        this.respostas = dados as string[];
        console.log(dados)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
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
