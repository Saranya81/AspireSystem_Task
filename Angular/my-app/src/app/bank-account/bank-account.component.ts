import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.css'
})
export class BankAccountComponent {
  bankAccountType:string="Savings";

  accounts:{ accountNumber: number, accountHolderName: string, accountType: string, amount: number, date: string }[]=[
    {accountNumber:40006000956, accountHolderName:"Oviya",accountType:"Savings",amount:30000,date:"1-10-2010"},
  {accountNumber:40006000957, accountHolderName:"Maha",accountType:"Business",amount:90000,date:"07-08-1973"},
  {accountNumber:40006000958, accountHolderName:"JJohn",accountType:"Savings",amount:50000,date:"2-06-2000"},
  {accountNumber:40006000959, accountHolderName:"Kalai",accountType:"Savings",amount:8450,date:"18-1-1968"},
  {accountNumber:40006000960, accountHolderName:"Yokesh",accountType:"Salary",amount:6000,date:"02-09-1993"},
  {accountNumber:40006000961, accountHolderName:"Arun",accountType:"Business",amount:40000,date:"4-02-2001"},
  {accountNumber:40006000962, accountHolderName:"Saranya",accountType:"Salary",amount:5000,date:"09-1-2006"},
 
  ];

  getAccountDetails(amount: number): string {
    if (amount < 10000) {
      return 'Inactive';
    } else if (amount >= 10000 && amount < 25000) {
      return 'Active';
    } else {
      return 'Loyal';
    }
  }
}

