import { ProjetoServices } from './../../services/projeto-services.service';
import { serverConfig } from './../../../main';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.page.html',
  styleUrls: ['./atividade.page.scss'],
})
export class AtividadePage implements OnInit {

  constructor(private services: ProjetoServices) { }

  titulo : string;

 

  ngOnInit() {
  }

  limpaDados(){
    this.titulo = "";
  }

  onSubmit(){
    let atividade = {
      nome  :this.titulo
    };
    const response = this.services.postData(serverConfig.getUrl()+"atividade/create.php",atividade);
    alert("Response:"+JSON.stringify(response));
    this.limpaDados();
  }
}
