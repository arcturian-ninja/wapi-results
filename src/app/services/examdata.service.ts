import { Injectable } from '@angular/core';
import data from './../../assets/data.json';
import { IData } from '../idata';

@Injectable({
  providedIn: 'root'
})
export class ExamdataService {

  constructor() { }

  fetch(): IData{
    return data;
  }
}
