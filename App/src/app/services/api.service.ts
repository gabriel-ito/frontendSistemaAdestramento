import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api/'
  private API_URL_GET = 'http://localhost:8080/api/duvida/ativo/1'
  private API_URL_GET_MINHAS_PERGUNTAS = 'http://localhost:8080/api/duvida/usuario/'
  private API_URL_GET_MINHAS_RESPOSTAS = 'http://localhost:8080/api/duvida/adestrador/'
  private API_URL_GET_MEU_ATENDIMENTO = 'http://localhost:8080/api/agenda/usuario/'
  private API_URL_GET_MEUS_ATENDIMENTOS = 'http://localhost:8080/api/agenda/adestrador/'

  constructor(public http: HttpClient, private alertCtrl: AlertController) { }

  async showAlertSucess(){
    const myAlert = await this.alertCtrl.create({
      header: 'Cadastro realizado com sucesso',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

  async showAlertError(){
    const myAlert = await this.alertCtrl.create({
      header: 'Ocorreu um erro ao se cadastrar',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

  async showDuvidaSucess(){
    const myAlert = await this.alertCtrl.create({
      header: 'Pergunta cadastrada com sucesso',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

  async showDuvidaError(){
    const myAlert = await this.alertCtrl.create({
      header: 'Ocorreu um erro ao cadastrar a pergunta',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

  async showAgendaSucess(){
    const myAlert = await this.alertCtrl.create({
      header: 'Atendimento cadastrada com sucesso',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

  async showAgendaError(){
    const myAlert = await this.alertCtrl.create({
      header: 'Ocorreu um erro ao cadastrar o atendimento',
      //message: 'E-mail ou senha inválidos',

      buttons: ['OK']
    });

    myAlert.present();
  }

    createAccount(nome: string, email: string, senha: string, endereco: string, telefone: string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco,
        telefone: telefone
      };

      this.http.post(this.API_URL + 'usuario', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showAlertSucess();
        },
        () => this.showAlertError()
        );
    });
  }

  createAccountAdestrador(nome: string, email: string, senha: string, crmv: string, telefone: string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        email: email,
        senha: senha,
        crmv: crmv,
        telefone: telefone
      };

      this.http.post(this.API_URL + 'adestrador', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showAlertSucess();
        },
        () => this.showAlertError()
        );
    });
  }

  criarPergunta(pergunta: string, resposta: string, id) {
    return new Promise((resolve, reject) => {
      var data = {
        pergunta: pergunta,
        resposta: "",
        usuarioId: id
      };
      console.log(data);
      this.http.post(this.API_URL + 'duvida', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showDuvidaSucess();
        },
        () => this.showDuvidaError()
        );
    });
  }

  criarAgenda(dataAgenda: string, observacao: string, id){
    return new Promise((resolve, reject) => {
      var data = {
        dataAgenda: dataAgenda,
        observacao: observacao,
        adestradorId: id
      };
      console.log(data);
      this.http.post(this.API_URL + 'agenda', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showDuvidaSucess();
        },
        () => this.showDuvidaError()
        );
    });
  }

  responderPergunta(id, resposta: string, adestradorId) {
    return new Promise((resolve, reject) => {
      var data = {
        id: id,
        resposta: resposta,
        adestradorId: adestradorId
      };
      console.log(data);
      this.http.post(this.API_URL + 'duvida/resposta', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showDuvidaSucess();
        },
        () => this.showDuvidaError()
        );
    });
  }

  cadastrarAtendimento(id, observacao: string, usuarioId) {
    return new Promise((resolve, reject) => {
      var data = {
        id: id,
        observacao: observacao,
        usuarioId: usuarioId
      };
      console.log(data);
      this.http.post(this.API_URL + 'agenda/cadastrar', data)
        .subscribe((result: any) => {
          resolve(result);
          this.showAgendaSucess();
        },
        () => this.showAgendaError()
        );
    });
  }

  logar(email: string, senha: string): Observable<[]>  {

      let url = this.API_URL + 'usuario/' + email + '/' + senha;
      return this.http.get<[]>(url);

  }

  logarAdestrador(email: string, senha: string): Observable<[]>  {

    let url = this.API_URL + 'adestrador/' + email + '/' + senha;
    return this.http.get<[]>(url);

}

  duvidaSelecionada(id): Observable<[]> {

    let url = this.API_URL + 'duvida/' + id;
    return this.http.get<[]>(url);

  }


  listaDuvidas() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'duvida/ativo/' + 1;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  adestradores(): Observable<[]> {

    let url = this.API_URL + 'adestrador/ativo/' + 1;
    return this.http.get<[]>(url);
      
  };
  
  minhasDuvidas(id): Observable<[]> {
    
    let url = this.API_URL_GET_MINHAS_PERGUNTAS + id;
    return this.http.get<[]>(url);
        
  }

  horasDisponiveis(id): Observable<[]> {
    
    let url = this.API_URL + 'agenda/adestrador/' + id;
    return this.http.get<[]>(url);
        
  }

  minhasRespostas(id): Observable<[]> {
    
    let url = this.API_URL_GET_MINHAS_RESPOSTAS + id;
    return this.http.get<[]>(url);
        
  }

  meusAtendimentos(id): Observable<[]> {

    let url = this.API_URL_GET_MEU_ATENDIMENTO + id;
    return this.http.get<[]>(url);
      
  };

  meusAtendimentosAdestrador(id): Observable<[]> {

    let url = this.API_URL_GET_MEUS_ATENDIMENTOS + id;
    return this.http.get<[]>(url);
      
  };

  query(): Observable<[]> {

      let url = this.API_URL_GET;
      return this.http.get<[]>(url);
        
    };
  
}

