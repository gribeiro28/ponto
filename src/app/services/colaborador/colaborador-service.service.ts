import { serverConfig } from './../../../main';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorServiceService {

  constructor(private http: HttpClient) { }

  createColab(colab: any) {
    let url = serverConfig.getUrl();
    url += "colaborador/create.php";
    let obj : any;
    obj = 
    {'nome':colab.nome,
    'email_corp':colab.email_corp,
    'email_part':colab.email_part,
    'matricula':colab.matricula,
    'tipo':colab.tipo};
    let test = JSON.parse(JSON.stringify(colab));
    let head = new HttpHeaders({'Content-Type':'application/json'});
    alert(JSON.stringify(colab));
    return this.http.post(url, JSON.parse(JSON.stringify(colab)), {headers:head}).toPromise();
  }

}
