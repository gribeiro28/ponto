import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public itensDoPerfil = [
    {tipo: 'Colaborador'},
    {tipo: 'Coordenador'},
    {tipo: 'Recursos Humanos'},
    {tipo: 'Financeiro'},
    {tipo: 'Orçamentista'},
    {tipo: 'Ponto Geral'}
  ]

  public appPages = [
    {
      title: 'Cliente',
      url: '/cliente',
      icon: 'business'
    },
    {
      title: 'Projeto',
      url: '/projeto',
      icon: 'folder'
    },
    {
      title: 'Atividades',
      url: '/atividade',
      icon: 'checkmark-circle-outline'
    },
    {
      title: 'Colaborador',
      url: '/colaborador',
      icon: 'people'
    },
    {
      title: 'Ponto',
      url: '/ponto',
      icon: 'time'
    },
    {
      title: 'Lançamentos',
      url: '/lancamentos',
      icon: 'bookmarks'
    },
    {
      title: 'Relatorios',
      url: '/relatorio',
      icon: 'bookmarks'
    },
    {
      title: 'Locais',
      url: '/local',
      icon: 'pin'
    },
    {
      title: 'Motivos',
      url: '/motivo',
      icon: 'clipboard'
    },
    {
      title: 'Solicitações',
      url: '/solicitacao',
      icon: 'bookmark'
    },
    {
      title :'Colaboradores',
      url:'/card-colaborador',
      icon: 'people'
    }
  ];

  botoes : any = [
    {
      nome : 'a'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
