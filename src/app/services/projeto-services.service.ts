import { async } from '@angular/core/testing';
import { serverConfig } from './../../main';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjetoServices {

  constructor(private http : HttpClient) {}

  readAllColab(){
    let url = serverConfig.getUrl()+"colaborador/read.php";
    
    return this.http.get(url).toPromise();
  }

  createColab(colab : any){
    let url = serverConfig.getUrl()+"colaborador/create.php";
    return this.http.post(url, colab).toPromise();
    //return this.http.post(url, colab,{headers: headers}).toPromise();
  }

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
    }

  async postData(url:string, data : {}) {
      const response =  await fetch(url,
      {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(data)
      }
      );
      return await response.json();
  }

}



/*
{

  "nome":"Nome",
  "email_corp":"email@email.com",
  "email_part":"email@email.com",
  "matricula":123,
  "tipo":1

}
*/