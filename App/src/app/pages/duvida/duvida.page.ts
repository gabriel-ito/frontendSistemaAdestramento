import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';

@Component({
  selector: 'app-duvida',
  templateUrl: './duvida.page.html',
  styleUrls: ['./duvida.page.scss'],
})
export class DuvidaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public folder: string;

  perguntas = [];
  question : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService,
    private router: Router,
    private navParamService: NavparamService
    ) { 
      this.question = this.navParamService.getNavData();
      //console.log(this.question.id);

      let d = this.question.id;
      console.log(d);
      this.ionViewDidLoad(d);
    }

  ionViewDidLoad(id){
    this.ApiService.minhasDuvidas(id).subscribe(
      dados => {
        this.perguntas = dados as string[];
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
