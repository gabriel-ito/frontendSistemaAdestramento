import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-adestrador',
  templateUrl: './adestrador.page.html',
  styleUrls: ['./adestrador.page.scss'],
})
export class AdestradorPage implements OnInit {

  public folder: string;

  perguntas = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ApiService: ApiService
    ) { 
      this.ionViewDidLoad();
    }

  ionViewDidLoad(){
    this.ApiService.query().subscribe(
      dados => {
        this.perguntas = dados as string[];
        //console.log(dados)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }  


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
