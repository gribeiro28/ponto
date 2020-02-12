import { async } from '@angular/core/testing';
import { ProjetoServices } from './../../services/projeto-services.service';
import { serverConfig } from './../../../main';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, Validators,FormGroup,FormBuilder } from '@angular/forms';
import { ColaboradorServiceService } from 'src/app/services/colaborador/colaborador-service.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.page.html',
  styleUrls: ['./colaborador.page.scss'],
})
export class ColaboradorPage implements OnInit {

  constructor(
    private navCtrl : NavController, 
    private http : HttpClient,
    private colabService1 : ProjetoServices,
    private colabService : ColaboradorServiceService
    ) { }

  nome : string; 
  matricula : number;
  email_corp : string;
  email_part : string;
  tipo:number;
  

  ngOnInit() {

  }

  onSubmit(){
    if(this.verificaCampos()){
      let colab = { 
                    nome : this.nome, 
                    email_corp:this.email_corp,
                    email_part:this.email_part,
                    matricula:+this.matricula,
                    tipo:+this.tipo
                  };
                  let test = JSON.parse(JSON.stringify(colab));
      /*this.http.post(serverConfig.getUrl()+"colaborador/create.php",
      test,
      {headers:new HttpHeaders({'Content-Type':'application/json'}),responseType:"json"},)
      .toPromise().then((response:any)=>{
      }).catch((response:any)=>{
        alert("E:"+JSON.stringify(response));
      });*/

     /* var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );

      var head = new HttpHeaders("Content-Type:application/json");

      this.http.post(serverConfig.getUrl()+"colaborador/create.php",test,
      {headers:head, params:test})
      .subscribe(data => {
        alert(data);
      }, error =>{
        alert("E:"+JSON.stringify(error));
      })*/

      fetch(serverConfig.getUrl()+"colaborador/create.php",
        {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body: JSON.stringify(colab)
        }
        
      );

    }else{
      alert("Preencha todos os Campos");
    }
  }

  botaoDeVoltar(){
    this.navCtrl.navigateBack("home");
  }

  limpaDados(){
    this.nome = "";
    this.email_corp = "";
    this.email_part = "";
  }
  private verificaCampos() : boolean{
    if(
      this.nome != "" && 
      this.email_corp != "" &&
      this.email_part != "" &&
      this.nome != undefined && 
      this.email_corp != undefined &&
      this.email_part != undefined &&
      this.matricula != undefined &&
      this.tipo != undefined 
     ){
    return true;
    }
    
    return false;
    
  }
  

  public itensDoPerfil = [
    {tipo:1 ,titulo:'Colaborador'},
    {tipo:2 ,titulo:'Coordenador'},
    {tipo:3 ,titulo:'Recursos Humanos'},
    {tipo:4 ,titulo:'Financeiro'},
    {tipo:5 ,titulo:'Orçamentista'},
    {tipo:6 ,titulo:'Ponto Geral'}
  ]

}
