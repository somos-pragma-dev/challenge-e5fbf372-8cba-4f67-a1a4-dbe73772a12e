import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-standalone-component',
  template: `<div>Saldo: {{ accountBalance() }}</div>`,
  standalone: true
})
export class StandaloneComponent implements OnInit {
  accountBalance = signal<number>(0);

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccountBalance().subscribe(balance => {
      this.accountBalance.set(balance);
    });
    effect(() => {
      console.log('Saldo actualizado:', this.accountBalance());
    });
  }
}