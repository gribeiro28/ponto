import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-cancelar',
  templateUrl: './button-cancelar.component.html',
  styleUrls: ['./button-cancelar.component.scss'],
})
export class ButtonCancelarComponent implements OnInit {

  constructor() { }

  textBtnConfig={
    text : 'Cancelar'
  }

  imgBtnConfig={
    src:'../../../assets/imgs/ednaldo_pereira.jpg'
  }

  onTextBtnClick(){
    alert("Apertado");
  }

  ngOnInit() {}

}
