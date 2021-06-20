import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})
export class PerguntaPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  private slug: String;
  
  perguntas = [];
  data : any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, 
    private navParamService: NavparamService) {
      this.data = this.navParamService.getNavData()
      let d = this.data.id;
      console.log(d);
      // this.responder(d);
  }

  ngOnInit() {
    //this.slug = this.route.snapshot.paramMap.get('id');
    //this.loadCheckList(this.slug);
  }

}