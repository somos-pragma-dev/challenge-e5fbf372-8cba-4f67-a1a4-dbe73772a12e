import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor() {}

  getAccountBalance(): Observable<number> {
    // Simula una llamada a un servicio externo
    return of(1000);
  }
}