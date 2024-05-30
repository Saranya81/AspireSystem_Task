import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { account } from './account.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  accountType:string="Savings";

  accounts:account[]=[
    {accountNumber:40006000956, accountHolderName:"Oviya",accountType:"Savings",amount:30000,date:"1-10-2010"},
  {accountNumber:40006000957, accountHolderName:"Maha",accountType:"Business",amount:90000,date:"07-08-1973"},
  {accountNumber:40006000958, accountHolderName:"JJohn",accountType:"Savings",amount:50000,date:"2-06-2000"},
  {accountNumber:40006000959, accountHolderName:"Kalai",accountType:"Savings",amount:8450,date:"18-1-1968"},
  {accountNumber:40006000960, accountHolderName:"Yokesh",accountType:"Salary",amount:6000,date:"02-09-1993"},
  {accountNumber:40006000961, accountHolderName:"Arun",accountType:"Business",amount:40000,date:"4-02-2001"},
  {accountNumber:40006000962, accountHolderName:"Saranya",accountType:"Salary",amount:5000,date:"09-1-2006"},
 
  ];

  getAccountStatus(amount: number): string {
    if (amount < 10000) {
      return 'Inactive';
    } else if (amount >= 10000 && amount < 25000) {
      return 'Active';
    } else {
      return 'Loyal';
    }
  }
}