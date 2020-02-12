import { ProjetoServices } from './../../services/projeto-services.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { serverConfig } from '../../../main';
@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {

  constructor(private colabService : ProjetoServices){}
  public colaboradoresDisponiveis : any = [];


  ngOnInit() {
    this.colabService.readAllColab().then((response)=>{
      alert(JSON.stringify(response));
      this.colaboradoresDisponiveis = response;
    }).catch((response)=>{
      alert("Erro feio erro rude"+JSON.stringify(response));
    });
  }

  

  result : any;

  
  atividadesSelect : any = [
    {
      atividade : "Desenvolvimento de Software"
    },
    {
      atividade : "Desenvolvimento de Projeto Elétrico"
    },
    {  
      atividade : "Desenvolvimento de Projeto Mecânico"
    },
    {
      atividade : "Teste em Bancada"
    },
  ]


  get(){
   
  }

  post(){
     
  }

  dataI : string;
  dataT : string;
  atividades  : string;
  coordenador : string;
  equipe : string;
  codigo : string;
  nome : string;

  
  colab : string = "";

  enviaDados(){
    alert("Insira aqui uma requisição HTTP");
  }

  limpaDados(){
    this.codigo = "";
    this.nome = "";
    this.coordenador = "";
    this.equipe = "";
    var data = new Date();
    this.dataI = "";
    this.dataT = "";
    this.atividades = "";
  }

  colabSelecionado(nome : string): void{
    console.log("Você selecionou o funcionário:"+this.colab);
    alert(nome);
  }

  selecionado(nome  : string): void{
      this.colab = nome;
  }

  eventoChip(){

    console.log("Funcionando");

  }

}

export class Colaborador{
  constructor(){}

  id : number;
  nome : string;
  email_corp : string;
  email_part : string;
  matricula : number;
  tipo : number;

}


/*    {
      nome : 'Gustavo Takaoka',
      foto : '../../../assets/imgs/chips/gustavo 3x4.JPG'
    },
    {
      nome : 'Hebert Martinelli',
      foto : '../../../assets/imgs/chips/hebert_3x4.jpg'
    },
    {
      nome : 'Maurício Simões',
      foto : '../../../assets/imgs/chips/mauricio_3_4x.jpg'
    },{
      nome : 'Gustavo Takaoka',
      foto : '../../../assets/imgs/chips/gustavo 3x4.JPG'
    },
    {
      nome : 'Hebert Martinelli',
      foto : '../../../assets/imgs/chips/hebert_3x4.jpg'
    },
    {
      nome : 'Maurício Simões',
      foto : '../../../assets/imgs/chips/mauricio_3_4x.jpg'
    },{
      nome : 'Gustavo Takaoka',
      foto : '../../../assets/imgs/chips/gustavo 3x4.JPG'
    },
    {
      nome : 'Hebert Martinellii',
      foto : '../../../assets/imgs/chips/hebert_3x4.jpg'
    },
    {
      nome : 'Maurício Simões',
      foto : '../../../assets/imgs/chips/mauricio_3_4x.jpg'
    }*/ 