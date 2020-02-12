import { serverConfig } from './../../../main';
import { ProjetoServices } from './../../services/projeto-services.service';
import { ButtonCancelarComponent } from './../../components/button-cancelar/button-cancelar.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(private services : ProjetoServices) { }

  nome : string;
  nomeFant : string;
  emailCorp : string;
  fornecedor : boolean;
  ngOnInit() {
  }

  limpaCampos(){
    this.nome = "";
    this.nomeFant = "";
    this.emailCorp = "";
    this.fornecedor = false;
  }

  enviaDados(){ 
    let cliente = {
    nome  :this.nome,

  };
  const response = this.services.postData(serverConfig.getUrl()+"cliente/create.php",cliente);
  alert("Response:"+JSON.stringify(response));
  this.limpaCampos();
  }
}
