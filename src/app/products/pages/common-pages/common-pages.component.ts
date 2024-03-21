import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-common-pages',
  templateUrl: './common-pages.component.html',
  styleUrl: './common-pages.component.css'
})
export class CommonPagesComponent {
    // i18n select
    public name:string = 'fernando';
    public gender: 'male' | 'female' = 'male';

    public invitationMap  =  {
      male: 'invitarlo',
      female:'invitarla'

    }

    changeClient():void {
      this.name= 'melisa';
      this.gender= 'female'
    }

    //i18nPlural
    public clientes:string []= ['maria','pedro','luis','santiago','fernando','elisa'];
    public clientsMap = {
      '=0': 'ningún cliente esperando',
      '=1':'un cliente espernado',
      'other': '# clientes esperando'
    }

    deleteClient():void {
      this.clientes.shift();
    }

    //keyvalue pipe
    public person = {
      name: 'Fernando',
      age: 36,
      adreess: 'Canada'
    }

    //Async PiPE

    public myObservableTimer = interval(2000);

}
