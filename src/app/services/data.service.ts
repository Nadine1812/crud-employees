import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let  employees =  [
      {  id:  1,  nom:  'Mili', prenom: 'Nadine', dateNaissance: '18/12/1997' },
      {  id:  2,  nom:  'Tlili', prenom: 'Nada', dateNaissance: '28/06/1999' },
      {  id:  3,  nom:  'Messelmeni', prenom: 'Rana', dateNaissance: '14/12/1998' },
      {  id:  4,  nom:  'Zammeli', prenom: 'Mariem', dateNaissance: '01/02/1996'}
     ];
  
     return {employees};
  
    }
  }
